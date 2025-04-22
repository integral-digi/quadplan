const 
Tags = ( {project}: any ) => {
    return (
        <div className="w-full">
            <div className="border border-white border-t-2 border-b-2 border-r-0 border-l-0 w-full h-32 flex items-center-safe">
				{project.tags.map((tag: any, index: number)=> (
					<div key={index} className="w-full flex items-center space-x-20">
						<h1 className="font-black text-white text-[5rem]">
							{tag}
						</h1>
					</div>
				))}
			</div>
        </div>
    )
}

export default Tags;