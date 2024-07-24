import React from 'react';
import Navigation from './components/Navigation';
import Greetings from './components/Greetings';
import Skills from './containers/Skills';
import Proficiency from './containers/Proficiency';
import Education from './containers/Education';
import Experience from './containers/Experience';
import Feedbacks from './containers/Feedbacks';
import Projects from './containers/Projects';
import GithubProfileCard from './components/GithubProfileCard';
import { openSource } from './constants/portfolio';
import ProjectsCarousel from './containers/ProjectsCarousel';

const githubProfileData = async (githubUserName: string): Promise<any> => {
    const githubProfileData = await fetch(
        `https://api.github.com/users/${githubUserName}`
    ).then((res) => res.json());
    return githubProfileData
}
export type IMainAppProps = {

}

const MainApp: React.FC<IMainAppProps> = ({ }) => {
    const [profileData, setProfileData] = React.useState({
        avatar_url: "",
        bio: "",
        location: "",
    });
    React.useEffect(() => {
        githubProfileData(openSource.githubUserName).then((res) => {
            setProfileData(res)
        })
    }, []);

    return (
        <>
            <Navigation />
            <Greetings />
            <Skills />
            <Proficiency />
            <Education />
            <Experience />
            {/* <Feedbacks /> */}
            <Projects />
            {/* <ProjectsCarousel />  */}
            <GithubProfileCard prof={profileData} />
        </>
    );
}

export default MainApp