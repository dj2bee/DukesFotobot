module.exports = function(router, bot) {
	router.post('/dukesfotobot', function(req, res) {
		var chatId = '1384527',
			sender = req.body.sender,
			repository = req.body.repository,
			commits = req.body.commits,
			user = sender.login,
			repoName = repository.full_name,
			repoUrl = repository.url,
			commitsCount = commits.length;

		var counter = 1,
			commitInfo = '';
		for(var key in commits) {
			commitInfo += counter++ + ') ' + commits[key].message + '\n';
		}


		bot.sendMessage(chatId, user + ' pushed to ' + repoName + ' (' + commitsCount + ' commits)\n\n' + commitInfo
			+ '\n\nRepository: ' + repoUrl);
		bot.sendMessage('-63867549', user + ' pushed to ' + repoName + ' (' + commitsCount + ' commits)\n\n' + commitInfo
			+ '\n\nRepository: ' + repoUrl);
		res.send('ok');
	});

	// Debug only
	router.get('/dukesfotobot', function(req, res) {
		bot.sendMessage('1384527', 'Webhook foo');
		res.send('foo');
	});

};


//{ ref: 'refs/heads/master',
//	compare: 'https://github.com/dj2bee/DukesFotobot/compare/c204e448be6a...b9733cd91e18',
//	commits:
//	[ { id: 'b9733cd91e1838563677425b7dfebe049e2604ae',
//		message: 'TEST',
//		timestamp: '2015-12-21T00:21:34+01:00',
//		url: 'https://github.com/dj2bee/DukesFotobot/commit/b9733cd91e1838563677425b7dfebe049e2604ae'
//  } ],
//	repository:
//	{ id: 48330006,
//		name: 'DukesFotobot',
//		full_name: 'dj2bee/DukesFotobot',
//		owner: { name: 'dj2bee', email: 'dj2bee@users.noreply.github.com' },
//		private: false,
//		html_url: 'https://github.com/dj2bee/DukesFotobot',
//		url: 'https://github.com/dj2bee/DukesFotobot',
//		created_at: 1450631320,
//		updated_at: '2015-12-20T17:09:40Z',
//		pushed_at: 1450653699,
//		git_url: 'git://github.com/dj2bee/DukesFotobot.git',
//		size: 990,
//		stargazers_count: 0,
//		watchers_count: 0,
//		language: 'JavaScript',
//		forks: 1,
//		open_issues: 0,
//		watchers: 0,
//		default_branch: 'master',
//		stargazers: 0,
//		master_branch: 'master' },
//	pusher: { name: 'dj2bee', email: 'dj2bee@users.noreply.github.com' },
//	sender:
//	{ login: 'dj2bee',
//		id: 13245099,
//		avatar_url: 'https://avatars.githubusercontent.com/u/13245099?v=3',
//		gravatar_id: '',
//		url: 'https://api.github.com/users/dj2bee',
//		html_url: 'https://github.com/dj2bee',
//		type: 'User',
//		site_admin: false } }