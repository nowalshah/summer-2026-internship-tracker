"use client";
import { useState } from "react";
import jobs from "../data/jobs";
import JobList from "../components/JobList";
import JobDetails from "../components/JobDetails";
import AddJobForm from "../components/AddJobForm";
import styles from "../styles/Home.module.css";
export default function Home() {
  const [jobList, setJobList] = useState(jobs);
  const [selectedJob, setSelectedJob] = useState(null);
  const addJob = (newJob) => {
    setJobList([...jobList, { ...newJob, id: Date.now() }]);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Internship Tracker (Summer 2026)</h1>
      </div>
      <div className={styles.layout}>
        <JobList
          jobs={jobList}
          onSelectJob={setSelectedJob}
          selectedJob={selectedJob}
        />
        <JobDetails job={selectedJob} />
        <AddJobForm addJob={addJob} />
      </div>
    </div>
  );
}