import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundry from "./components/ErrorBoundry";
import { AuthProvider } from "./context/AuthContext";
import { FirestoreProvider } from "./context/FirestoreContext";
import enUS from "./locales/en-US.json";
import zhTW from "./locales/zh-TW.json";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import ProfileSetUpPage from "./pages/ProfileSetUpPage";
import ResoucePage from "./pages/ResoucePage";
import ResouceContentPage from "./pages/ResourceContentPage";
import SignUpPage from "./pages/SignUpPage";
import TaskPage from "./pages/TaskPage";

const LOCALES_LIST = [
  {
    label: "English",
    value: "en-US",
  },
  {
    label: "繁體中文",
    value: "zh-TW",
  },
];

const LOCALE_DATA = {
  "en-US": enUS,
  "zh-TW": zhTW,
};

function App(): JSX.Element {
  return (
    <ErrorBoundry>
      <AuthProvider>
        <FirestoreProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="task" element={<TaskPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="resources" element={<ResoucePage />} />
            <Route path="resources/:title" element={<ResouceContentPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="set-profile" element={<ProfileSetUpPage />} />
          </Routes>
        </FirestoreProvider>
        <ToastContainer style={{ width: "100vw" }} />
      </AuthProvider>
    </ErrorBoundry>
  );
}

export default App;
