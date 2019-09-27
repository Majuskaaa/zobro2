import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/levKonzsky/01.jpg'),
  require('../../images/animals/levKonzsky/02.jpg'),
  require('../../images/animals/levKonzsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/levKonzsky/01-thumb.jpg'),
  require('../../images/animals/levKonzsky/02-thumb.jpg'),
  require('../../images/animals/levKonzsky/03-thumb.jpg'),
];

export default class AnimalDetail extends React.Component {
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Afrika je kontinent dokonalých predátorů. Každý, kdo tu žije, i&nbsp;každý, kdo tudy jen prochází, se dostává do blízkosti obávaných zabijáků. V&nbsp;savanách, řekách, džunglích i&nbsp;pouštích žijí tvorové, kteří jsou připraveni zaútočit. Najdeme mezi nimi i&nbsp;největšího predátora Afriky, lva. Nás však nebude zajímat jen tak ledajaký lev, my se podíváme do oblasti Kalahari do smečky lvů konžských.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jen se na něj podívejte, jak líně se válí na sluníčku a užívá si jeho paprsky dopadající na srst a hustou hřívu. Ačkoliv některé poddruhy lva mají hřívu pouze kolem hlavy, lev z Kalahari se chlubí také hřívou na břiše a jasně jí dává najevo, kdo je tady pánem. Nemusíme snad zmiňovat, že hříva zároveň odlišuje samce od samic, které bývají až o&nbsp;čtyřicet procent menší.
        </AnimalText>
        <AnimalText>
          Lvi konžští, stejně jako další lvi, žijí ve skupinách obvykle čítajících pět až třicet jedinců. Na rozdíl od ostatních kočkovitých šelem jsou to společenská zvířata. Jejich počet ve skupině závisí na mnoha okolnostech, kterými jsou třeba velikost teritoria nebo dostatek potravy. Takovou skupinu ovládá jeden až čtyři dospělí samci – většinou jsou to sourozenci, případně se potkali v&nbsp;období dospívání a vytvořili tzv.&nbsp;koalici. Mají zásadní úkol: uchránit svou smečku před cizími samci a hyenami, které jsou jim konkurencí při lovu potravy. Smečka žije vždy v&nbsp;určitém teritoriu. Vyskytují se však i&nbsp;potulní samci, kteří vlastní smečku nemají.
        </AnimalText>
        <AnimalText>
          Až tři čtvrtiny ulovené potravy, převážně antilop, zeber, pakoňů, gazel a dalších, mají na svědomí lvice. Zatímco samice loví, samci mají při žraní přednost a dokáží na posezení spořádat až čtyřicet pět kilogramů masa, které následně několik dní tráví. Někdy se však na lov vydá celá smečka. Jsou známy případy, kdy se smečka specializuje na lov velké kořisti, například žiraf, slonů nebo buvolů. Typicky tomu tak je v&nbsp;případě lvů na severním okraji oblasti Kalahari, kde nejčastěji loví právě slony. Tato velká zvířata jsou však lvům nebezpečná a mohou jim přivodit až smrtelná zranění.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Ačkoliv jindy spolu samci ve smečce vycházejí, nastávají i&nbsp;chvíle, kdy tomu tak není. Například při boji o&nbsp;postavení. Pokud je stávající vůdce smečky přemožen, je většinou zabit silnějším soupeřem, nebo vyhnán. K&nbsp;soubojům mezi lvy dochází také v&nbsp;období páření. Bez ohledu na výsledek souboje se samice páří zpravidla se všemi samci ze smečky. Pár pracující na zachování rodu se na několik dní oddělí od smečky a v&nbsp;ústraní se páří přibližně každých dvacet minut. V&nbsp;těchto dnech lvi nepřijímají potravu ani neloví, zvláště pro samce je tak toto období velmi náročné. Po přibližně čtyřměsíční březosti se rodí dvě až čtyři mláďata o&nbsp;hmotnosti do dvou kilogramů. Samice lvíčata porodí v&nbsp;úkrytu a o&nbsp;samotě, poté je často stěhuje. Ke smečce se vrací až téměř po dvou měsících. Zápach, který říjná samice vydává, může přilákat i&nbsp;cizího lva. Pokud se cizí lev zmocní smečky, zabije mláďata poražených samců, musí však bojovat také se lvicemi. Úmrtnost mláďat je vysoká a až polovina se jich nedožije prvního roku věku. Když mladí samci dospějí, odchází ze smečky a zakládají si svou vlastní, zatímco lvice zůstávají. Smečku též opouští staří samci, kteří se odeberou do ústraní a tam buď o&nbsp;samotě, nebo ve skupině s&nbsp;ostatními starými jedinci dožívají.
        </AnimalText>
        <AnimalText>
          ***
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          V&nbsp;naší zoo byli lvi chováni nepřetržitě od roku&nbsp;1953 až do roku&nbsp;2003. Za tu dobu odchovali jedenáct lvíčat. Poslední brněnský lev, samec Bali, tenkrát z&nbsp;důvodu nevyhovujících prostor pro chov odešel do Zoo Les Sables d´Olonne ve Francii.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          V&nbsp;roce&nbsp;2017 se k&nbsp;nám lvi vrátili. Momentálně zde najdete samce Lolka, který se narodil v&nbsp;roce&nbsp;2015 v&nbsp;polském Gdaňsku, a o&nbsp;necelé tři roky starší samici Kivu, která pochází z&nbsp;Lisabonu a k&nbsp;nám přišla z&nbsp;Ústí nad Labem. Ačkoliv se seznámili teprve v&nbsp;srpnu, ještě téhož roku (29.&nbsp;prosince) se jim narodila první mláďata, samička Anoona a sameček Akashinga.
        </AnimalText>
      </AnimalTemplate>
    );
  }
};
