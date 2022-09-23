
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import Main from './screen/main';

export default function App() {
  return (
    
    <ApplicationProvider {...eva} theme={eva.light}>
      <Main/>
  </ApplicationProvider>
  );
}
