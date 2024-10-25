import { Route, Routes as ReactRouterRoutes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import CVListPage from "../pages/CVListPage"
import MultiStepForm from "../pages/MultiStepForm"
import PersonalInformationPage from "../pages/PersonalInformationPage"
import EducationPage from "../pages/EducationPage"
import ExperiencePage from "../pages/ExperiencePage"
import CVPage from "../pages/CVPage"

const Routes = () => {
  return (
    <ReactRouterRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv-list" element={<CVListPage />} />
        <Route path="/create-cv" element={<MultiStepForm />} />
        <Route path="/personal-information" element={<PersonalInformationPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/cv" element={<CVPage />} />
    </ReactRouterRoutes>
  )
}

export default Routes