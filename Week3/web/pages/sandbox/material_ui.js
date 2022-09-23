import { } from 'semantic-ui-react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import styled from 'styled-components';

const MyDeleteIcon = styled(DeleteIcon)`
    width: 100px;
    height: 100px;
    background-color: #DDA;
    border-radius: 50%;
    padding: 10px;
`

// npm install @mui/material @mui/styled-engine-sc
// need to install SVG icons too from website
// install emotion as well npm add emotion 
// install styled as well npm add @emotion/styled
// tooltip

// Material UI - https://react.semantic-ui.com/views/

//http://localhost:3000/sandbox/material_ui
export default function Material_UI() {
    return <div style={{backgroundColor:"#777"}}>
        <Tooltip title="My name is Monika">
            <div>
                Hi Material UI Here
            </div>
        </Tooltip>
        <Tooltip title="Delete">
            <IconButton onClick={() => alert('deletes')}>
                <DeleteIcon />
                <MyDeleteIcon />
            </IconButton>
        </Tooltip>
    </div>
}