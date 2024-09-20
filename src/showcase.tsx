import cl from "clsx/lite";
import { useState } from "react";

import {
  Checkbox,
  Divider,
  Heading,
  Textfield,
  Link,
  Button,
  Select,
  Search,
  Table,
  Pagination,
  Card,
  Radio,
  Tag,
  Tabs,
  Paragraph,
  Accordion,
  Switch,
} from "@digdir/designsystemet-react";

import classes from "./showcase.module.css";

export const Showcase: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  const [radioValue, setRadioValue] = useState("vanilje");
  return (
    <div className={cl(classes.body, className)} {...rest}>
      <div className={cl(classes.components)}>
        <div className={cl(classes.checkbox)}>
          <Checkbox.Group error="" legend="Handleliste" size="sm">
            <Checkbox value="epost">En kilo poteter</Checkbox>
            <Checkbox value="telefon">To liter Farris</Checkbox>
            <Checkbox value="sms" checked>
              Blomkål
            </Checkbox>
            <Divider />
            <Checkbox value="sms">2kg smågodt</Checkbox>
            <Checkbox value="sms">10 poser med Smash</Checkbox>
          </Checkbox.Group>
        </div>
        <div data-ds-theme="light" className={classes.login}>
          <Heading
            className={cl(classes.cardTitle, classes.userTitle)}
            size="xs"
          >
            Opprett ny bruker
          </Heading>

          <Textfield
            label="Navn"
            size="sm"
            placeholder="Ola Normann"
            className={classes.userField}
          />
          <Link href="#" className={classes.userLink}>
            Glemt passord?
          </Link>
          <Button size="sm" className={classes.userBtn}>
            Opprett ny bruker
          </Button>
        </div>
        <div data-ds-theme="light" className={cl(classes.tableContainer)}>
          <Heading className={classes.cardTitle} size="xs">
            Alle brukere
          </Heading>
          <div className={classes.tableHeader}>
            <div className={classes.tableAction}>
              <Select
                label=""
                size="sm"
                className={classes.tableSelect}
              >
                <option value="blank">Velg handling</option>
                <option value="everest">Dupliser</option>
                <option value="aconcagua">Slett</option>
                <option value="denali">Oppdater</option>
              </Select>
              <Button className={classes.tableBtn} size="sm">
                Utfør
              </Button>
            </div>
            <Search
              label="Label"
              placeholder="Søk etter bruker..."
              size="sm"
              variant="simple"
              className={classes.tableSearch}
            />
          </div>
          <Table size="sm" className={classes.table}>
            <Table.Head>
              <Table.Row>
                <Table.HeaderCell onClick={function Ya() {}} sort="ascending">
                  Navn
                </Table.HeaderCell>
                <Table.HeaderCell>Epost</Table.HeaderCell>
                <Table.HeaderCell onClick={function Ya() {}} sort="ascending">
                  Telefon
                </Table.HeaderCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell className={classes.tableCell}>
                  <img
                    className={classes.tableImg}
                    src="/img/avatars/female1.png"
                    alt="Bilde av dame"
                  />
                  Lise Nordmann
                </Table.Cell>
                <Table.Cell>lise@nordmann.no</Table.Cell>
                <Table.Cell>22345678</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className={classes.tableCell}>
                  <img
                    className={classes.tableImg}
                    src="/img/avatars/male2.png"
                    alt="Bilde av mann"
                  />
                  Ola Nordmann
                </Table.Cell>
                <Table.Cell>ola@nordmann.no</Table.Cell>
                <Table.Cell>87654321</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Pagination
            currentPage={3}
            nextLabel="Neste"
            onChange={function Ya() {}}
            previousLabel="Forrige"
            size="sm"
            totalPages={6}
          />
        </div>
        <div className={cl(classes.help)}>
          <Heading size="xs" className={classes.helpHeading}>
            Hva kan vi hjelpe deg med?
          </Heading>
          <div className={classes.helpCards}>
            <Card color="brand1">
              <Card.Header className={classes.helpHeader}>
                <Heading size="xs">Sikkerhet og drift</Heading>
              </Card.Header>
              <Card.Content className={cl(classes.helpContent)}>
                Most provide as with carried business are much better more the.
              </Card.Content>
            </Card>
            <Card color="brand2">
              <Card.Header className={classes.helpHeader}>
                <Heading size="xs">Skole og utdanning</Heading>
              </Card.Header>
              <Card.Content className={cl(classes.helpContent)}>
                Most provide as with carried business are much better more the.
              </Card.Content>
            </Card>
            <Card color="brand3">
              <Card.Header className={classes.helpHeader}>
                <Heading size="xs">Mat og helse</Heading>
              </Card.Header>
              <Card.Content className={cl(classes.helpContent)}>
                Most provide as with carried business are much better more the.
              </Card.Content>
            </Card>
          </div>
        </div>
        <div className={classes.tags}>
          <Heading size="xs">Emner</Heading>
          <div className={classes.tagList}>
            <Tag color="brand1" size="sm">
              Data og IKT
            </Tag>
            <Tag color="brand2" size="sm">
              Mat og ernæring
            </Tag>
            <Tag color="brand3" size="sm">
              Sport og Idrett
            </Tag>
            <Tag color="neutral" size="sm">
              Politikk og samfunn
            </Tag>
            <Tag color="success" size="sm">
              Utenriks
            </Tag>
            {/* <Tag color="info" size="sm">
            Helse og velvære
          </Tag>
          <Tag color="danger" size="sm">
            PC Gaming
          </Tag>
          <Tag color="warning" size="sm">
            Trening og livsstil
          </Tag> */}
          </div>
        </div>
        <div className={classes.switches}>
          <Heading
            size="xs"
            className={cl(classes.footerHeading, classes.switchHeading)}
          >
            Innstillinger
          </Heading>
          <Paragraph size="sm" className={classes.switchParagraph}>
            Her kan du justere på innstillingene dine
          </Paragraph>
          <div className={classes.switchGroup}>
            <Switch size="sm">Desktopvisning</Switch>
            <Switch size="sm" checked>
              Tabletvisning
            </Switch>
            <Switch size="sm">Mobilvisning</Switch>
          </div>
        </div>
        <div data-ds-theme="light" className={classes.radios}>
          <Radio.Group
            error=""
            legend="Hvilken iskremsmak er best?"
            size="sm"
            value={radioValue}
            onChange={(e) => setRadioValue(e)}
          >
            <Radio value="vanilje">Vanilje</Radio>
            <Radio value="jordbær">Jordbær</Radio>
            <Radio value="sjokolade">Sjokolade</Radio>
            <Radio value="spiser-ikke-is">Jeg spiser ikke iskrem</Radio>
          </Radio.Group>
        </div>
        <div className={cl(classes.tabs)}>
          <Tabs.Root defaultValue="value1" size="sm">
            <Tabs.List>
              <Tabs.Tab value="value1">Min profil</Tabs.Tab>
              <Tabs.Tab value="value2">Tjenester</Tabs.Tab>
              <Tabs.Tab value="value3">Innstillinger</Tabs.Tab>
            </Tabs.List>
          </Tabs.Root>
          <Paragraph size="sm">
            For å kunne bli registrert i{" "}
            <Link href="#">Frivillighetsregisteret</Link>, må organisasjonen
            drive frivillig virksomhet. Det er bare foreninger,{" "}
            <Link href="#">stiftelser</Link> og som kan registreres.
            Virksomheten kan ikke dele ut midler til fysiske personer.
            Virksomheten må ha et styre. Virksomheten må være registrert i{" "}
            <Link href="#">Enhetsregisteret</Link> før den kan bli registrert.
          </Paragraph>
        </div>

        <div className={cl(classes.faq)}>
          <Heading size="xs" className={classes.cardTitle}>
            Ofte stillte spørmsål
          </Heading>
          <Accordion color="brand3" border className={classes.accordion}>
            <Accordion.Item>
              <Accordion.Heading>
                Hvem kan registrere seg i Frivillighetsregisteret?
              </Accordion.Heading>
              <Accordion.Content>
                For å kunne bli registrert i Frivillighetsregisteret, må
                organisasjonen drive frivillig virksomhet. Det er bare
                foreninger, stiftelser og aksjeselskap som kan registreres.
                Virksomheten kan ikke dele ut midler til fysiske personer.
                Virksomheten må ha et styre.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Heading >
                Hvordan går jeg fram for å registrere i Frivillighetsregisteret?
              </Accordion.Heading>
              <Accordion.Content>
                Virksomheten må være registrert i Enhetsregisteret før den kan
                bli registrert i Frivillighetsregisteret. Du kan registrere i
                begge registrene samtidig i Samordnet registermelding.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Heading>
                Hvordan går jeg fram for å registrere i Frivillighetsregisteret?
              </Accordion.Heading>
              <Accordion.Content>
                Virksomheten må være registrert i Enhetsregisteret før den kan
                bli registrert i Frivillighetsregisteret. Du kan registrere i
                begge registrene samtidig i Samordnet registermelding.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
