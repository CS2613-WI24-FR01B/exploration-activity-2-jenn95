const JobClient = require('./JobClient');
const axios = require('axios');

const keyword = "Junior developer in Canada";
(async () => {
  const jobClient = new JobClient(axios);
  console.log(`keyword: `, keyword);
  const jobs = await jobClient.getLatestJobs(keyword);
  console.table(jobs, ["employer_name", "job_title", "job_city", "job_is_remote", "job_min_salary", "job_max_salary"]);
  return jobs;
})();