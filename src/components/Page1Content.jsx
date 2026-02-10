```jsx
// src/components/service/ServiceItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader } from '@material-ui/core';

const ServiceItem = ({ title, description, icon }) => (
  <Card>
    <CardHeader title={title} avatar={icon} />
    <CardContent>{description}</CardContent>
  </Card>
);

ServiceItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default ServiceItem;
```

```jsx
// src/components/service/ServiceHead.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const ServiceHead = ({ title, subtitle }) => (
  <div>
    <Typography variant="h4">{title}</Typography>
    <Typography variant="subtitle1">{subtitle}</Typography>
  </div>
);

ServiceHead.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

ServiceHead.defaultProps = {
  subtitle: '',
};

export default ServiceHead;
```

```jsx
// src/components/solution/SoluCards.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia } from '@material-ui/core';

const SoluCards = ({ title, description, image }) => (
  <Card>
    <CardMedia image={image} title={title} />
    <CardContent>
      <h3>{title}</h3>
      <p>{description}</p>
    </CardContent>
  </Card>
);

SoluCards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SoluCards;
```

```jsx
// src/components/solution/Solutions.jsx
import React from 'react';
import PropTypes from 'prop-types';
import SoluCards from './SoluCards';

const Solutions = ({ solutions }) => (
  <div>
    {solutions.map((solution) => (
      <SoluCards key={solution.id} {...solution} />
    ))}
  </div>
);

Solutions.propTypes = {
  solutions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Solutions;
```

```jsx
// src/components/card/CardPage.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader } from '@material-ui/core';

const CardPage = ({ title, content }) => (
  <Card>
    <CardHeader title={title} />
    <CardContent>{content}</CardContent>
  </Card>
);

CardPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default CardPage;
```

```jsx
// src/components/card/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader } from '@material-ui/core';

const Card = ({ title, children }) => (
  <Card>
    <CardHeader title={title} />
    <CardContent>{children}</CardContent>
  </Card>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
```

```jsx
// src/components/form/FormPage.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, TextField, Button } from '@material-ui/core';

const FormPage = ({ title, onSubmit, fields }) => (
  <Card>
    <CardHeader title={title} />
    <CardContent>
      <form onSubmit={onSubmit}>
        {fields.map((field) => (
          <TextField key={field.name} {...field} />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </CardContent>
  </Card>
);

FormPage.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string,
    })
  ).isRequired,
};

export default FormPage;
```

```jsx
// src/components/footer/FootHead.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const FootHead = ({ title }) => (
  <div>
    <Typography variant="h6">{title}</Typography>
  </div>
);

FootHead.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FootHead;
```

```jsx
// src/components/footer/Footer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import FootHead from './FootHead';
import FootItems from './FootItems';

const Footer = ({ title, items }) => (
  <div>
    <FootHead title={title} />
    <FootItems items={items} />
  </div>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Footer;
```

```jsx
// src/components/footer/FootItems.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from '@material-ui/core';

const FootItems = ({ items }) => (
  <List>
    {items.map((item) => (
      <ListItem key={item}>{item}</ListItem>
    ))}
  </List>
);

FootItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FootItems;
```

```jsx
// src/components/latest/LatestItems.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader } from '@material-ui/core';

const LatestItems = ({ title, description }) => (
  <Card>
    <CardHeader title={title} />
    <CardContent>{description}</CardContent>
  </Card>
);

LatestItems.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default LatestItems;
```

```jsx
// src/components/latest/Latest.jsx
import React from 'react';
import PropTypes from 'prop-types';
import LatestItems from './LatestItems';

const Latest = ({ items }) => (
  <div>
    {items.map((item) => (
      <LatestItems key={item.title} {...item} />
    ))}
  </div>
);

Latest.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Latest;
```

```jsx
// src/components/deve/Dev.jsx
import React from 'react';
import PropTypes from 'prop-types';
import DevItems from './DevItems';

const Dev = ({ items }) => (
  <div>
    {items.map((item) => (
      <DevItems key={item.title} {...item} />
    ))}
  </div>
);

Dev.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Dev;
```

```jsx
// src/components/deve/DevItems.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader } from '@material-ui/core';

const DevItems = ({ title, description }) => (
  <Card>
    <CardHeader title={title} />
    <CardContent>{description}</CardContent>
  </Card>
);

DevItems.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DevItems;
```

```jsx
// src/context/Context.jsx
import React from 'react';

const Context = React.createContext();

export default Context;
```
# Auto improvement by Melius