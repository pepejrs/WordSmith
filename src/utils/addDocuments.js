import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export default function AddDocuments() {
  const navigate = useNavigate();
  const docId = uuid();
  function handleAddDocument(e) {
    e.preventDefault();
    navigate(`/Documents/${docId}`);
  }

  return (
    <button
      class="py-3 px-4 bg-transparent text-red-600 font-semibold border border-red-600 rounded-full hover:bg-red-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      onClick={handleAddDocument}
    >
      <i class="fa-solid fa-plus"></i>
      {"  "}Add Document
    </button>
  );
}
