import './App.css'
import APIInformationButton from './components/APIInformationButton';
import FileUpload from './components/FileUpload';
import HeaderImages from './components/HeaderImages'
import QueryForm from './components/QueryForm'
import ResetDatabaseButton from './components/ResetDatabaseButton';
import UpdateDatabaseButton from './components/UpdateDatabaseButton';

function App() {
  return (
    <>
      <HeaderImages />
      <h1>Defense Trend Detector</h1>
      <QueryForm />
      <UpdateDatabaseButton />
      <ResetDatabaseButton />
      <FileUpload />
      <APIInformationButton />
    </>
  );
}

export default App
