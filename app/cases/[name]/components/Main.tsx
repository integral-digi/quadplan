
type MainCaseProps = {
	project: any;
};

const FolderImage = ({ src, alt }: { src: string; alt: string }) => (
	<div className="flex space-x-8 space-y-20 h-full overflow-auto w-full">
		<div className="relative w-full h-[640px] md:h-[640px] bg-yellow-300 rounded-b-md shadow-md overflow-hidden">
			<img src={src} alt={alt || "Folder content"} className="object-cover w-full h-full" />
		</div>
		<div className="relative w-full h-[720px] md:h-[640px] bg-yellow-300 rounded-b-md shadow-md overflow-hidden">
			<img src={src} alt={alt || "Folder content"} className="object-cover w-full h-full" />
		</div>
	</div>
);

const MainCase = ({ project }: MainCaseProps) => {
	if (!project) return null;

	return (
		<div className="w-full px-6 md:px-24 space-y-16">
			{/* Header Section */}
			<div className="space-y-12">
				{project.logo && (
					<img src={project.logo} className="w-auto h-6" alt={project.name || "Project logo"} />
				)}
				<h1 className="text-4xl md:text-[5rem] text-white font-bold">{project.title}</h1>
			</div>

			{/* Project Details */}
			<div className="flex flex-wrap gap-12 max-w-4xl">
				<Detail label="Year" value={project.year} />
				<Detail label="Type" value={project.clientType} />
				<Detail label="Scope" value={project.scope} />
			</div>

			{/* First Image */}
			{project.photo && <FolderImage src={project.photo} alt={project.title} />}

			{/* About */}
			<Section title="About" content={project.description} />

			{/* Challenges */}
			<Section title="Challenges" content={project.intro} />

			{/* Second Image (conditional logic fixed) */}
			{project.photoTwo && project.photoThree && (
				<FolderImage src={project.photoTwo} alt={`${project.title} Secondary`} />
			)}

			{/* Solution */}
			<Section title="Solution" content={project.midsection} />

			{/* Third Image */}
			{project.photoThree && (
				<FolderImage src={project.photoThree} alt={`${project.title} Final`} />
			)}

			{/* Conclusion */}
			<Section title="Conclusion" content={project.outro} />
		</div>
	);
};

// Reusable components for clarity and DRYness
const Section = ({ title, content }: { title: string; content?: string }) =>
	content ? (
		<div className="space-y-4 md:space-y-8 max-w-5xl">
			<h5 className="text-2xl md:text-4xl font-bold text-white">{title}</h5>
			<p className="text-white text-base md:text-xl">{content}</p>
		</div>
	) : null;

const Detail = ({ label, value }: { label: string; value?: string }) =>
	value ? (
		<div className="space-y-2">
			<h6 className="text-2xl text-white font-bold">{value}</h6>
			<p className="text-base text-white font-normal">{label}</p>
		</div>
	) : null;

export default MainCase;