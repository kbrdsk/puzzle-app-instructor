const ghpages = require("gh-pages");

const args = process.argv.slice(2);
const repo =
	args[0] === "production"
		? "git@github.com-mcubmath:mcubmath/instructor.git"
		: "git@github.com:kbrdsk/puzzle-app-instructor.git";

ghpages.publish(
	"build",
	{
		repo,
	},
	(err) => (err ? console.log(err) : console.log(`Published to ${repo}`))
);
