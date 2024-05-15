import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { useProjects } from '../hooks/useProject';
import { useParams } from 'react-router-dom';
import { Button } from '@headlessui/react';
import './dos.css';

export const PostDetails = () => {
    const { projectId } = useParams();
    const { findByIdProject, isFetching, projects } = useProjects();

    useEffect(() => {
        findByIdProject(projectId);
    }, [projectId]); 
    
    const project = projects.find(proj => proj._id === projectId);

    return (
        <>
            <Navbar />
            <div className="container mx-auto flex justify-center items-center h-screen"> {/* Contenedor principal con clase 'container' */}
                <div className="w-full md:w-8/12 px-4 mb-8"> {/* Se elimina el contenedor interno innecesario */}
                <div className="flex justify-center">
                    <img src="https://www.pqforce.com/site/assets/files/160126/fromideatoproject-header-2.-big.png" className="w-full h-64 object-cover rounded" />
                    </div>
                    {project && (
                        <>
                            <h2 className="text-4xl font-bold mt-4 mb-2 flex justify-center">{project.title}</h2>
                            <p className="text-description flex justify-center">{project.description}</p>
                            
                                <a href={project.code} className="Get-project"><Button> Obtener Proyecto</Button></a>
                                <a href={project.code} className="Get-project"><Button> Comentar</Button></a>
                           
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
