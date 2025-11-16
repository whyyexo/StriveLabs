export interface Product {
  id: string
  name: string
  description: string
  status: "current" | "upcoming"
}

export const products: Product[] = [
  {
    id: "fiverflow",
    name: "FiverFlow",
    description: "An AI-powered automation system for freelancers & creators.",
    status: "current",
  },
  {
    id: "openforge",
    name: "OpenForge",
    description: "A platform for building, deploying and running AI-driven applications.",
    status: "current",
  },
  {
    id: "atom",
    name: "Atom",
    description: "A code-native productivity AI designed for extreme speed.",
    status: "current",
  },
  {
    id: "strive-engine",
    name: "Strive Engine",
    description: "Foundation models & inference infrastructure powering all StriveLabs products.",
    status: "current",
  },
  {
    id: "neuron-sdk",
    name: "Neuron SDK",
    description: "Tooling for developers to integrate AI capabilities into their applications.",
    status: "current",
  },
  {
    id: "automation-core",
    name: "Automation Core",
    description: "Workflow engine for orchestrating complex AI-driven automations.",
    status: "current",
  },
]

