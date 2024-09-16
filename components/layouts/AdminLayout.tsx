export default function AdminLayout ({children}) {

    return (
        <div className="flex gap-8">
            <nav>A</nav>
        <div className="bg-gray-100 flex-[8] p-4 rounded min-h-[300px]">
          {children}
        </div>
      </div>
    )
}