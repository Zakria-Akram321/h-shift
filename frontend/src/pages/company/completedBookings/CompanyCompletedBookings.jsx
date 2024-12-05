import { useAuth } from 'src/context/AuthContext.jsx'
import CompletedBookings from 'src/components/completedBookings/CompletedBookings'

export default function CompanyCompletedBookings() {
	const { user } = useAuth()

	return (
		<CompletedBookings
			fetchUrl={`http://localhost:5000/company/completed-bookings?companyId=${user._id}`}
			role={`${user.role}`}
		/>
	)
}
