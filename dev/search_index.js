var documenterSearchIndex = {"docs":
[{"location":"examples/","page":"Examples","title":"Examples","text":"CurrentModule = DockerSandbox","category":"page"},{"location":"examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/#Simple-Example","page":"Examples","title":"Simple Example","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"using DockerSandbox\n\nconfig = DockerConfig(; base_image = \"julia:latest\");\n\nwith_container() do container\n    code = \"\"\"\n    println(\"Hello world!\")\n    \"\"\"\n    run(container, config, `julia -e $(code)`)\nend","category":"page"},{"location":"examples/#Interactive-Example","page":"Examples","title":"Interactive Example","text":"","category":"section"},{"location":"examples/","page":"Examples","title":"Examples","text":"julia> using DockerSandbox\n\njulia> config = DockerConfig(;\n           base_image = \"julia:latest\",\n           Base.stdin,\n           Base.stdout,\n           Base.stderr,\n       );\n\njulia> with_container() do container\n           run(container, config, `/bin/bash`)\n       end","category":"page"},{"location":"public/","page":"Public API","title":"Public API","text":"CurrentModule = DockerSandbox","category":"page"},{"location":"public/#Public-API","page":"Public API","title":"Public API","text":"","category":"section"},{"location":"public/","page":"Public API","title":"Public API","text":"Modules = [DockerSandbox]\nPublic = true\nPrivate = false","category":"page"},{"location":"public/#DockerSandbox.DockerConfig","page":"Public API","title":"DockerSandbox.DockerConfig","text":"DockerConfig(; kwargs...)\n\nRequired Keyword Arguments:\n\nbase_image::String\n\nOptional Keyword Arguments:\n\nverbose::Bool = false\nenv::Union{Dict{String, String}, Nothing} = nothing\nplatform::Symbol = :linux\nread_only_maps::Union{Dict{String, String}, Nothing} = nothing\nread_write_maps::Union{Dict{String, String}, Nothing} = nothing\nstdin::IO = Base.devnull\nstdout::IO = Base.stdout\nstderr::IO = Base.stderr\ndocker_build_stdout::Union{IO, Nothing} = nothing\ndocker_build_stderr::Union{IO, Nothing} = nothing\nadd_capabilities::Union{Vector{String}, Nothing} = nothing\n\n\n\n\n\n","category":"type"},{"location":"public/#Base.run-Tuple{DockerSandbox.DockerContainer, DockerConfig, Cmd}","page":"Public API","title":"Base.run","text":"run(container::DockerContainer, config::DockerConfig, user_cmd::Cmd; kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"public/#Base.success-Tuple{DockerSandbox.DockerContainer, DockerConfig, Cmd}","page":"Public API","title":"Base.success","text":"success(container::DockerContainer, config::DockerConfig, user_cmd::Cmd; kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"public/#DockerSandbox.with_container-Union{Tuple{T}, Tuple{F}, Tuple{F, Type{T}}} where {F<:Function, T<:DockerSandbox.DockerContainer}","page":"Public API","title":"DockerSandbox.with_container","text":"with_container(f::Function, ::Type{<:DockerContainer} = DockerContainer; kwargs...)\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = DockerSandbox","category":"page"},{"location":"#[DockerSandbox.jl](https://github.com/JuliaContainerization/DockerSandbox.jl)","page":"Home","title":"DockerSandbox.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"DockerSandbox.jl is a package for running Julia Cmd objects inside of Docker containers.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The source code for this package is available in the GitHub repository.","category":"page"},{"location":"#Related-Packages","page":"Home","title":"Related Packages","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You may also be interested in:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Sandbox.jl","category":"page"},{"location":"internals/","page":"Internals (Private)","title":"Internals (Private)","text":"CurrentModule = DockerSandbox","category":"page"},{"location":"internals/#Internals-(Private)","page":"Internals (Private)","title":"Internals (Private)","text":"","category":"section"},{"location":"internals/","page":"Internals (Private)","title":"Internals (Private)","text":"Modules = [DockerSandbox]\nPublic = false\nPrivate = true","category":"page"},{"location":"internals/#DockerSandbox.DockerContainer","page":"Internals (Private)","title":"DockerSandbox.DockerContainer","text":"DockerContainer()\n\n\n\n\n\n","category":"type"},{"location":"internals/#DockerSandbox.build_docker_image-Tuple{DockerConfig}","page":"Internals (Private)","title":"DockerSandbox.build_docker_image","text":"build_docker_image(config::DockerConfig)\n\n\n\n\n\n","category":"method"},{"location":"internals/#DockerSandbox.cleanup-Tuple{DockerSandbox.DockerContainer}","page":"Internals (Private)","title":"DockerSandbox.cleanup","text":"cleanup(container::DockerContainer)\n\n\n\n\n\n","category":"method"},{"location":"internals/#DockerSandbox.construct_container_command-Tuple{DockerSandbox.DockerContainer, DockerConfig, Cmd}","page":"Internals (Private)","title":"DockerSandbox.construct_container_command","text":"construct_container_command(container::DockerContainer, config::DockerConfig, cmd::Cmd)\n\n\n\n\n\n","category":"method"},{"location":"internals/#DockerSandbox.docker_image_label-Tuple{DockerSandbox.DockerContainer}","page":"Internals (Private)","title":"DockerSandbox.docker_image_label","text":"docker_image_label(container::DockerContainer)\n\n\n\n\n\n","category":"method"},{"location":"internals/#DockerSandbox.docker_image_name-Tuple{String}","page":"Internals (Private)","title":"DockerSandbox.docker_image_name","text":"docker_image_name(image::String)\n\n\n\n\n\n","category":"method"},{"location":"prerequisites/","page":"Prerequisites","title":"Prerequisites","text":"CurrentModule = DockerSandbox","category":"page"},{"location":"prerequisites/#Prerequisites","page":"Prerequisites","title":"Prerequisites","text":"","category":"section"},{"location":"prerequisites/","page":"Prerequisites","title":"Prerequisites","text":"You must have Docker installed on your computer.","category":"page"}]
}
