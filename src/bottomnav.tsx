import { useRouter } from 'next/router'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

export default function MyBottomNav(prop: any) {
    const router = useRouter();
    // const handleChange = (ev: React.ChangeEvent<HTMLInputElement>, value: any) => { // cause build error...
    const handleChange = (ev: React.ChangeEvent<{}>, value: any) => {
        ev.preventDefault();
        router.push('/');
    }
    return (
        <BottomNavigation showLabels onChange={handleChange}>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </BottomNavigation>
    );
}
