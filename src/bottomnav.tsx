import { useRouter } from 'next/router'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

export default function MyBottomNav(prop: any) {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault();
        router.push('/');
    }
    return (
        <BottomNavigation showLabels onChange={(event, newValue) => {
            handleClick(event);
        }}>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </BottomNavigation>
    );
}
