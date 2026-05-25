import * as React from 'react';
import { ExclamationTriangleIcon } from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';
import { TrashIcon } from '@patternfly/react-icons/dist/js/icons/trash-icon';
import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateFooter,
  PageSection,
  Table,
  Tbody,
  Td,
  TextInput,
  Th,
  Thead,
  Title,
  Tr,
} from '@patternfly/react-core';
import { Field } from 'formik';
import { useTranslation } from '@flightctl/ui-components/src/hooks/useTranslation';
import { ROUTE, useNavigate } from '@flightctl/ui-components/src/hooks/useNavigate';

const MOCK_DEVICES = Array.from({ length: 5 }, (_, i) => ({ id: String(i + 1), name: `device-${i + 1}` }));

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <PageSection hasBodyWrapper={false}>
        <EmptyState titleText={t(`Page not found`)} icon={ExclamationTriangleIcon}>
          <EmptyStateBody>
            {t(`We didn't find a page that matches the address you navigated to.`)}
          </EmptyStateBody>
          <EmptyStateFooter>
            <Button variant="primary" onClick={() => navigate(ROUTE.ROOT)}>
              {t('Take me home')}
            </Button>
          </EmptyStateFooter>
        </EmptyState>
      </PageSection>

      <PageSection>
        <Title headingLevel="h2">Governance violation sandbox</Title>

        <Field name="govux-test-field" />

        <Button variant="plain" onClick={() => undefined}>
          <TrashIcon />
        </Button>

        <Button style={{ color: '#ff0000', padding: '12px' }} onClick={() => undefined}>
          Submit your request immediately
        </Button>

        <Button variant="danger" ouiaId="delete-fleet-action" onClick={() => undefined}>
          Remove fleet
        </Button>

        <TextInput placeholder="Search devices" />

        <Table aria-label="device-list">
          <Thead>
            <Tr>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {MOCK_DEVICES.map((device) => (
              <Tr key={device.id}>
                <Td onClick={() => console.log(device.id)} style={{ padding: 8 }}>
                  {device.name}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </PageSection>
    </>
  );
};

export default NotFound;
