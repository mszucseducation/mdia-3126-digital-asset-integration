import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { db } from "../firebase/firebase.js";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from 'react';

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  }

  // write
  const writeToDatabase = () => {
    const uuid = uid()
    set(ref(db, `/${uuid}`), {
      todo,
      uuid
    })
    // setting the input field back to blank
    setTodo("")
  }
  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if(data !== null) {
        Object.values(data).map(todo => {
          setTodos(oldArray => [...oldArray, todo])
        })
      }
    })
  }, [])

  //update
  const handleUpdate = (todo) => {
    setIsEdit(true);
    setTempUuid(todo.uuid);
    setTodo(todo.todo)
  }

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
      todo,
      uuid: tempUuid
    })
    setTodo("");
    setIsEdit(false);
  }

  //delete
  const handleDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`))
  }

  return (
    <div className={styles.container}>
      <input type="text" value={todo} onChange={handleTodoChange}/>
      {isEdit ? (
        <>
          <button onClick={handleSubmitChange}>submit change</button>
          <button onClick={() => {
            setIsEdit(false);
            setTodo("");
          }}>X</button>
        </>
        ) : (
          <button onClick={writeToDatabase}>submit</button>
        )
      }
      {todos.map((todo) => (
        <>
          <h1>{todo.todo}</h1>
          <button onClick={() => handleUpdate(todo)}>update</button>
          <button onClick={() => handleDelete(todo)}>delete</button>
        </>
      ))}
    </div>
  )
}
