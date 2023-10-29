import { currentYear } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-28 mb-10 text-center flex flex-col">
      <small className="text-sm font-medium text-gray-500">
        Created with &#128156; by Ivan Apostolovski. &copy; {currentYear}
      </small>
      <small className="text-xs font-medium text-gray-500 mt-2">
        Built with: Next 13, TypeScript, Tailwind, Framer Motion, React Three
        Fiber. Full credit for the 3D model goes to the{" "}
        <a href="https://sketchfab.com/3d-models/cloud-station-26f81b24d83441ba88c7e80a52adbaaf">
          original author
        </a>
        .
      </small>
    </footer>
  );
}
