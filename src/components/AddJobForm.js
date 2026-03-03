import { useState } from "react";
import styles from "../styles/Home.module.css";
export default function AddJobForm({ addJob }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("Applied");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !company) {
      setError("Please fill in Job Title and Company.");
      return;
    }
    setError("");
    addJob({ title, company, type, location, salary, status, id: Date.now() });
    setTitle("");
    setCompany("");
    setType("");
    setLocation("");
    setSalary("");
    setStatus("Applied");
  };
  return (
    <div className={styles.formBox}>
      <h2>Add a Job</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Job Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Company</label>
          <input value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Type</label>
          <input value={type} onChange={(e) => setType(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Location</label>
          <input value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Salary</label>
          <input value={salary} onChange={(e) => setSalary(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
          </select>
        </div>
        <button type="submit" className={styles.btn}>Add Job</button>
      </form>
    </div>
  );
}