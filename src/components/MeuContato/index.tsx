import { Card, MeuNome, Contato, Image, Email, Item, ItemLink, CardBaixo } from './styles'

const MeuContato = () => (
  <Card>
    <Contato>Meu Contato</Contato>
    <div>
      <Image src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611771.jpg?w=740&t=st=1716899771~exp=1716900371~hmac=6867ae1aac239b16c48fd19a366329abfee3bd0d32768a5e3c88c775fb9bae63"
      alt="Foto Avatar"
      />
      <MeuNome>Luis Felipe</MeuNome>
      <Email>luisfelipefv@email.com</Email>
    </div>
    <div>
      <CardBaixo>
        <Item>Engenheiro Front-End</Item>
        <Item>
          <ItemLink href="github.com/luisflipefv">GitHub</ItemLink>
        </Item>
        <Item>
          <ItemLink href="linkedin.com/in/luisfelipefrancavieira">Linkedin</ItemLink>
        </Item>
      </CardBaixo>
    </div>
  </Card>
)
export default MeuContato
