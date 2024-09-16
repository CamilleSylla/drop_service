import AdminLayout from "@/components/layouts/AdminLayout";

function AdminOverviewPage({}) {
    return (
        <div>Overview</div>
    )
}

AdminOverviewPage.getLayout = (page) => {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
} 

export default AdminOverviewPage;