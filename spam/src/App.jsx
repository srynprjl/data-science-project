function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Spam Detection System
      </h1>

      <form action="" className="max-w-md flex flex-col w-full gap-6 bg-gray-700 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col">
          <label className="text-lg mb-2">Subject:</label>
          <input type="text" placeholder="Enter a Subject" className="text-black bg-white p-3 rounded-md" />
        </div>

        <div className="flex flex-col">
          <label className="text-lg mb-2">Message:</label>
          <textarea type="text" placeholder="Enter a Message" className="h-32 resize-none text-black bg-white p-2 rounded-md " />
        </div>

        <div className="text-center">
          <button type="submit" className="text-xl bg-gray-800 rounded hover:bg-gray-900 py-4 px-8 font-bold">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
