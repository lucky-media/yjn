import Heading from "../Heading";

export default function AboutSection() {
    return (
        <div className="container mt-24 mb-32">
            <div className="row justify-between">
                <div className="md:col-6">
                    <Heading>About the project</Heading>
                    <p className="text-gray-500 text-justify font-medium mt-8">
                        Democracy Lab’s “Young Journalists’ Network“ supported by the Media Mentorship Program of the US
                        Embassy
                        in Skopje, will
                        build the capacities of young journalists in news gathering and reporting through a year-long series
                        of
                        professional
                        trainings and internship opportunities.
                        YJN aims to create and sustain a network of young, independent-minded journalists, committed to the
                        principles of
                        ethical and independent journalism. Through their participation in the program, participants will
                        build
                        their capacities
                        in news gathering and reporting through a year-long series of professional trainings and internship
                        opportunities.
                        The trainings will be designed and facilitated by international experts in cooperation with local
                        experts. Topics will
                        include:
                        </p>
                    <ul className="list-disc font-medium text-gray-500 mt-4 px-5">
                        <li>The role of journalism in democratic society & ethical journalism;</li>
                        <li>Investigative reporting techniques.</li>
                        <li>Data analysis and Visualization.</li>
                        <li>Digital media tools and platforms.</li>
                        <li>Working with government institutions.</li>
                        <li>Communication Skills.</li>
                        <li>Networking and Cooperation.</li>
                    </ul>
                </div>

                <div className="md:col-6  mt-10 md:mt-0">
                    <Heading>About Democracy Lab</Heading>
                    <p className="text-gray-500 text-justify font-medium mt-8 mb-5">
                        We serve as a hub for international, regional and local experts to share their knowledge and insight
                        on
                        democracy
                        building processes. Democracy Lab is committed to building networks and partnerships focused on
                        developing and
                        sustaining a functional democratic system in North Macedonia and Western Balkan States.
                            <br /> <br />
                            We aim to connect different Civic Society Organizations to enhance their human capacities, share
                            experiences and
                            knowledge, build coalitions and provide tools and resources to enforce democracy and its values.
                         </p>
                    <a className="text-blue-400 font-bold hover:text-blue-500" href="https://www.demlab.org/">Visit our
                website</a>
                </div>
            </div>
        </div>

    )
}
