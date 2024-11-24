import Trendign from '../src/assets/icons/trending.svg'
import NewRelease from '../src/assets/icons/newRelease.svg'
import CoomingSoon from '../src/assets/icons/commingSoon.svg'
import WatchLater from '../src/assets/icons/watchLater.svg'
import Favourite from '../src/assets/icons/favourite.svg'
export default function Sidebar() {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <img
              src={Trendign}
              width="24"
              height="24"
              alt="Trendign"
            />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={NewRelease}
              width="24"
              height="24"
              alt="NewRelease"
            />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={CoomingSoon}
              width="24"
              height="24"
              alt="CoomingSoon"
            />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={Favourite}
              width="24"
              height="24"
              alt="Favourite"
            />
            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={WatchLater}
              width="24"
              height="24"
              alt="WatchLater"
            />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
