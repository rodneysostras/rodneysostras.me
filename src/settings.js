// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2022 by the author of the rodneysostras.me project. All rights reserved.       │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘ 

export const API_API_ENDPOINT_GITHUB_TOKEN = (process.env.VUE_APP_API_ENDPOINT_GITHUB_TOKEN || '').trim();

if(!API_API_ENDPOINT_GITHUB_TOKEN) throw new Error('Please provide an GITHUB TOKEN');
