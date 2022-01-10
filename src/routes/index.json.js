import fm from 'front-matter';
import glob from 'glob';
import {fs} from 'mz';
import path from 'path';

export async function get(req, res) {
	// List the Markdown files and return their filenames
	const projects  = await new Promise((resolve, reject) =>
		glob('static/_projects/*.md', (err, files) => {
		if (err) return reject(err);
		return resolve(files);
	  }),
	);
  
	// Parse out the metadata from the files
	const projectsFrontMatter = await Promise.all(
	  projects.map(async (project) => {
		const content = (await fs.readFile(project)).toString();
		return {...fm(content).attributes, slug: path.parse(project).name};
	  }),
	);
  
	res.writeHead(200, {
	  'Content-Type': 'application/json',
	});
  
	res.end(JSON.stringify(projectsFrontMatter));
}
