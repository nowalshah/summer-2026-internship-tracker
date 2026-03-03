import styles from "../styles/Home.module.css";
export default function JobDetails({ job }) {
  if (!job) {
    return (
      <div className={styles.detailBox}>
        <p className={styles.placeholder}>Click a job to see details.</p>
      </div>
    );
  }
  const statusStyle =
    job.status === "Interview" ? styles.interview :
    job.status === "Offer" ? styles.offer :
    styles.applied;
  return (
    <div className={styles.detailBox}>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Status:</strong> <span className={statusStyle}>{job.status}</span></p>
      {job.description && (
        <>
          <h3>What You Will Do</h3>
          <p>{job.description}</p>
        </>
      )}
      {job.requirements && job.requirements.length > 0 && (
        <>
          <h3>Requirements</h3>
          <ul>
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}