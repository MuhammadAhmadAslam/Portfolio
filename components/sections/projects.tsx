"use client";

import { Container } from "../container";
import {
    MotionUp,
    ProjectCard,
    MagicButton,
    Modal,
    ModalBody,
    ModalContent,
} from "../animations";
import { SmallGridBackground } from "../bg-patterns";
import { useState } from "react";
import { useModal } from "@/context";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaGithub } from "react-icons/fa";
import { Heading } from "../";
import { Project } from "@/lib/types";
import { sortByPriority } from "@/lib/utils";

interface Props {
    projects: Project[];
}

const INITIAL_ITEMS = 3;

export function Projects({ projects }: Props) {
    const [items, setItems] = useState(sortByPriority(projects).slice(0, INITIAL_ITEMS));
    const [showAll, setShowAll] = useState(false);
    const { modalData } = useModal();

    function handleShowMore() {
        if (!showAll) {
            setShowAll(true);
            setItems(projects);
        } else {
            setShowAll(false);
            setItems(projects.slice(0, INITIAL_ITEMS));
        }
    }

    return (
        <SmallGridBackground className="py-10" id="projects">
            <Container>
                <MotionUp delay={0.1}>
                    <Heading text="A Small Selection of Recent Projects" />

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {items.map((project, index) => (
                            <ProjectCard key={index} data={project} />
                        ))}
                    </div>

                    {projects.length > INITIAL_ITEMS && (
                        <MagicButton
                            title={showAll ? "Show Less" : "Show More"}
                            handleClick={handleShowMore}
                            className="mx-auto !block mt-12"
                        />
                    )}
                </MotionUp>
            </Container>

            <Modal>
                <ModalBody className="!max-w-[700px]">
                    <ModalContent className="mt-5 space-y-6">

                        {/* Header */}
                        <div className="relative rounded-xl border border-white/10
                      bg-gradient-to-br from-slate-900 via-slate-950 to-black p-5">
                            <span className="absolute inset-x-0 top-0 h-[3px]
                         bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 rounded-full" />

                            <div className="flex flex-wrap items-center gap-4 justify-between">
                                <h5 className="text-xl font-semibold text-blue-100">
                                    {modalData?.title}
                                </h5>

                                <div className="flex gap-4">
                                    {modalData?.liveUrl && (
                                        <Link
                                            href={modalData.liveUrl}
                                            target="_blank"
                                            className="flex items-center text-purple text-sm"
                                        >
                                            <FaEye className="me-1" /> Live
                                        </Link>
                                    )}
                                    {modalData?.gitUrl && (
                                        <Link
                                            href={modalData.gitUrl}
                                            target="_blank"
                                            className="flex items-center text-purple text-sm"
                                        >
                                            <FaGithub className="me-1" /> Code
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="border border-gray-700/70 rounded-lg p-4">
                            <p className="leading-relaxed text-sm text-blue-100">
                                {modalData?.description}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h6 className="text-sm font-semibold text-blue-200 mb-3">
                                Tech Stack
                            </h6>
                            <div className="flex flex-wrap gap-3">
                                {modalData?.techStack?.map((item: string) => (
                                    <span
                                        key={item}
                                        className="bg-slate-800/60 px-4 py-2 text-xs
                         text-blue-100 rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </ModalContent>
                </ModalBody>
            </Modal>
        </SmallGridBackground>
    );
}
