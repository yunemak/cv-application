import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
	// Contact
	let [isContactSubmitted, setIsContactSubmited] = useState(false);
	let [fullName, setFullName] = useState("");
	let [email, setEmail] = useState("");
	let [phone, setPhone] = useState("");
	// Education
	let [isEducationSubmitted, setIsEducationSubmitted] = useState(false);
	let [school, setSchool] = useState("");
	let [study, setStudy] = useState("");
	let [studyDateStart, setStudyDateStart] = useState("");
	let [studyDateFinish, setStudyDateFinish] = useState("");
	// Experience
	let [isExperienceSubmitted, setIsExperienceSubmitted] = useState(false);
	let [companyName, setCompanyName] = useState("");
	let [positionTitle, setPositionTitle] = useState("");
	let [mainResponsibilities, setMainResponsibilities] = useState("");
	let [experienceDateStart, setExperienceDateStart] = useState("");
	let [experienceDateFinish, setExperienceDateFinish] = useState("");
	return (
		<div className="app">
			<div className="input-field">
				<h1>CV Application</h1>
				<Contact
					isContactSubmitted={isContactSubmitted}
					setIsContactSubmited={setIsContactSubmited}
					fullName={fullName}
					setFullName={setFullName}
					email={email}
					setEmail={setEmail}
					phone={phone}
					setPhone={setPhone}
				/>
				<hr />
				<Education
					isEducationSubmitted={isEducationSubmitted}
					setIsEducationSubmitted={setIsEducationSubmitted}
					school={school}
					setSchool={setSchool}
					study={study}
					setStudy={setStudy}
					studyDateStart={studyDateStart}
					setStudyDateStart={setStudyDateStart}
					studyDateFinish={studyDateFinish}
					setStudyDateFinish={setStudyDateFinish}
				/>
				<hr />
				<Experience
					isExperienceSubmitted={isExperienceSubmitted}
					setIsExperienceSubmitted={setIsExperienceSubmitted}
					companyName={companyName}
					setCompanyName={setCompanyName}
					positionTitle={positionTitle}
					setPositionTitle={setPositionTitle}
					mainResponsibilities={mainResponsibilities}
					setMainResponsibilities={setMainResponsibilities}
					experienceDateStart={experienceDateStart}
					setExperienceDateStart={setExperienceDateStart}
					experienceDateFinish={experienceDateFinish}
					setExperienceDateFinish={setExperienceDateFinish}
				/>
			</div>
			<div className="output-field">
				<h1>CV Preview</h1>
				<div className="contact-preview">
					<p>
						<b>Full Name:</b> {isContactSubmitted ? fullName : ""}
					</p>
					<p>
						<b>Email:</b> {isContactSubmitted ? email : ""}
					</p>
					<p>
						<b>Phone:</b> {isContactSubmitted ? phone : ""}
					</p>
				</div>
				<hr />
				<div className="education-preview">
					<p>
						<b>School: </b> {isEducationSubmitted ? school : ""}
					</p>
					<p>
						<b>Title of Study: </b>
						{isEducationSubmitted ? study : ""}
					</p>
					<p>
						<b>Date Start: </b>
						{isEducationSubmitted ? studyDateStart : ""}
					</p>
					<p>
						<b>Date Finish: </b>
						{isEducationSubmitted ? studyDateFinish : ""}
					</p>
				</div>
				<hr />
				<div className="experience-preview">
					<p>
						<b>Company Name: </b>
						{isExperienceSubmitted ? companyName : ""}
					</p>
					<p>
						<b>Position Title: </b>
						{isExperienceSubmitted ? positionTitle : ""}
					</p>
					<p>
						<b>Main Responsibilites:</b>
						{isExperienceSubmitted ? mainResponsibilities : ""}
					</p>
					<p>
						<b>Date Start: </b>
						{isExperienceSubmitted ? experienceDateStart : ""}
					</p>
					<p>
						<b>Date Finish: </b>
						{isExperienceSubmitted ? experienceDateFinish : ""}
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
