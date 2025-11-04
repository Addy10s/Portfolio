interface GitHubRepo {
	id: number;
	name: string;
	description: string | null;
	html_url: string;
	stargazers_count: number;
	updated_at: string;
	fork: boolean;
	owner?: {
		avatar_url?: string;
	};
}

export async function load({ fetch }) {
	try {
		const response = await fetch(
			'https://api.github.com/users/thesillyboi/repos?sort=updated&per_page=10'
		);
		if (!response.ok) {
			throw new Error(`GitHub API error: ${response.status}`);
		}
		const repos: GitHubRepo[] = await response.json();
		const projects = repos
			.filter((repo) => !repo.fork)
			.map((repo) => ({
				id: repo.id,
				name: repo.name,
				description: repo.description || 'No description available',
				url: repo.html_url,
				stars: repo.stargazers_count,
				updated: repo.updated_at,
				avatar_url: repo.owner?.avatar_url
			}));
		return {
			projects
		};
	} catch (error) {
		console.error('Error fetching GitHub repos:', error);
		return {
			projects: [],
			error: 'Failed to load projects'
		};
	}
}
