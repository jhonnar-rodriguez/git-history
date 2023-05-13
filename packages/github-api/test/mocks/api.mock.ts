import { BranchDto, CommitDetailDto, CommitDto } from '../../src/github/dtos';

const baseMockAvatarUrl = 'https://github.com/images/error/octocat_happy.gif';

const baseMockDate = new Date();
const baseMockEventsUrl =
  'https://api.github.com/users/octocat/events/{privacy}';
const baseMockName = 'octocat';
const baseMockFollowersUrl = 'https://api.github.com/users/octocat/followers';
const baseMockFollowingUrl =
  'https://api.github.com/users/octocat/following/{other_user}';
const baseMockUrl =
  'https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e';

export const mockedBranches: BranchDto[] = [
  {
    name: 'master',
    commit: {
      sha: 'c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc',
      url: 'https://api.github.com/repos/octocat/Hello-World/commits/c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc',
    },
    protected: true,
  },
];

export const mockedCommitsByBranch: CommitDto[] = [
  {
    url: baseMockUrl,
    sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
    commit: {
      url: 'https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
      author: {
        name: baseMockName,
        email: 'support@github.com',
        date: baseMockDate,
      },
      committer: {
        name: baseMockName,
        email: 'support@github.com',
        date: baseMockDate,
      },
      message: 'Fix all the bugs',
      comment_count: 0,
    },
    author: {
      id: 1,
      avatar_url: baseMockAvatarUrl,
      gravatar_id: '',
      followers_url: baseMockFollowersUrl,
      following_url: baseMockFollowingUrl,
      events_url: baseMockEventsUrl,
      type: 'User',
    },
  },
];

export const mockedCommitDetails: CommitDetailDto = {
  url: baseMockUrl,
  sha: '6dcb09b5b57875f334f61aebed695e2e4193db5e',
  node_id:
    'MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ==',
  commit: {
    url: 'https://api.github.com/repos/octocat/Hello-World/git/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e',
    author: {
      name: baseMockName,
      email: 'mona@github.com',
      date: new Date('2011-04-14T16:00:49Z'),
    },
    committer: {
      name: baseMockName,
      email: 'mona@github.com',
      date: new Date('2011-04-14T16:00:49Z'),
    },
    message: 'Fix all the bugs',
    comment_count: 0,
  },
  author: {
    id: 1,
    avatar_url: baseMockAvatarUrl,
    gravatar_id: '',
    followers_url: baseMockFollowersUrl,
    following_url: baseMockFollowingUrl,
    events_url: baseMockEventsUrl,
    type: 'User',
  },
  stats: {
    additions: 104,
    deletions: 4,
    total: 108,
  },
  files: [
    {
      filename: 'file1.txt',
      additions: 10,
      deletions: 2,
      changes: 12,
      status: 'modified',
      raw_url:
        'https://github.com/octocat/Hello-World/raw/7ca483543807a51b6079e54ac4cc392bc29ae284/file1.txt',
      blob_url:
        'https://github.com/octocat/Hello-World/blob/7ca483543807a51b6079e54ac4cc392bc29ae284/file1.txt',
      patch: '@@ -29,7 +29,7 @@\n.....',
    },
  ],
};
