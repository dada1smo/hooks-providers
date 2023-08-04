import { FunctionComponent } from 'react';
import { Button } from '../ui/button';

const Nav: FunctionComponent = () => {
  return (
    <nav className="flex gap-2">
      <Button link="/hooks" variant="outline">
        Hooks
      </Button>
      <Button link="/providers" variant="outline">
        Providers
      </Button>
    </nav>
  );
};

export default Nav;
