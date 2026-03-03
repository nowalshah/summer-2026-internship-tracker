import styles from "../styles/Home.module.css";
export default function JobList({ jobs, onSelectJob, selectedJob }) {
  return (
    <div className={styles.listBox}>
      <h2>Job Listings</h2>
      {jobs.length === 0 ? (
        <p className={styles.emptyMsg}>No jobs to show.</p>
      ) : (
        <ul className={styles.list}>
          {jobs.map((job) => (
            <li
              key={job.id}
              onClick={() => onSelectJob(job)}
              className={selectedJob?.id === job.id ? styles.activeItem : styles.listItem}
            >
              <strong>{job.title}</strong> — {job.company}
              <br />
              <small>{job.location} · {job.salary} · {job.type}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}