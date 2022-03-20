export const GITHUB_TOKEN = (process.env.VUE_APP_API_ENDPOINT_GITHUB_TOKEN || '').trim(); 

if(!GITHUB_TOKEN) throw new Error('Please provide an GITHUB TOKEN');