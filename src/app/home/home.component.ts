import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {AnimeService} from "../services/anime.service";
import {Router} from "@angular/router";
import {AnimeInterface, Fecha} from "../interfaces/anime.interface";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  private animeService=inject(AnimeService);
  private router=inject(Router);

  atributo: string = '';  // Valor predeterminado para el select
  valor: any = '';              // Valor predeterminado para el campo de búsqueda
  public animes:AnimeInterface[]=[];
  public animeA: AnimeInterface = {} as AnimeInterface;
  public isLoadding: boolean=false;
  public animesNonPresent:boolean=false;
  public displayedColumns: string[] = ['ranked','title', 'score', 'episodes', 'aired'];
  public columnMapping: { [key: string]: string } = {
    'title': 'Título',
    'score': 'Puntuación',
    'episodes': 'Episodios',
    'aired': 'Fecha de Emisión',
    'vote':'Votado',
    'ranked':'Posición',
    'popularity':'Popularidad',
    'source':'Fuente',
    'duration':'Duración',
    'rating':'Claficación',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',
    '':'',

  };
  public dataSource: MatTableDataSource<AnimeInterface>;
  datos: any = {};
  //constructor(private animeService:AnimeService,private router:Router) {}
  constructor() {
    this.dataSource = new MatTableDataSource<AnimeInterface>([]);
  }
  ngOnInit():void{
    console.log("Cargando animes...");
    this.isLoadding=true;
    this.animeService.findAll()
      .subscribe((response)=>{
        this.animes=response;
        this.isLoadding=false;
        this.animesNonPresent=this.animes.length===0;


        this.dataSource.data = this.animes;
        this.dataSource.paginator = this.paginator;
      })
  }

  ngAfterViewInit(): void {
    // Configura el paginador después de inicializar la vista y la tabla
    this.dataSource.paginator = this.paginator;
  }
  getFormattedAiredDate(aired: Fecha[]): string {
    if (!aired || aired.length === 0) {
      return 'N/A'; // O cualquier valor predeterminado para indicar que no hay fecha disponible.
    }

    // Mapear cada objeto Fecha en el array a una cadena formateada.
    const formattedDates = aired.map((fecha) => this.formatDate(fecha));

    return formattedDates.join(' - '); // Unir las fechas formateadas con una coma y un espacio.
  }

  private formatDate(fecha: Fecha): string {
    // Verificar si falta día, mes o año y mostrar "??"
    const formattedDay = fecha && fecha.dia != null ? fecha.dia : '??';
    const formattedMonth = fecha && fecha.mes != null ? fecha.mes : '??';
    const formattedYear = fecha && fecha.anio != null ? fecha.anio : '????';

    return `${formattedDay}/${formattedMonth}/${formattedYear}`;
  }

  realizarBusqueda() {
    switch (this.atributo) {
      case 'title':
        this.animeService.findByTitle(this.valor)
          .subscribe((response) => {
            this.animes = response;
            this.isLoadding = false;
            this.animesNonPresent = this.animes.length === 0;

            this.dataSource.data = this.animes;
            this.dataSource.paginator = this.paginator;
          });
        break;
      case 'position':
        this.animeService.findByPosition(this.valor)
          .subscribe(
            (response) => {
              this.animeA = response;
              this.isLoadding = false;
              this.animesNonPresent = this.animeA === null;
            }
          );
        break;

      case 'status':
        this.animeService.findByStatus(this.valor)
          .subscribe((response) => {
            this.animes = response;
            this.isLoadding = false;
            this.animesNonPresent = this.animes.length === 0;

            this.dataSource.data = this.animes;
            this.dataSource.paginator = this.paginator;
          });
        break;
      case 'premiered':
        this.animeService.findByPremiered(this.valor)
          .subscribe((response) => {
            this.animes = response;
            this.isLoadding = false;
            this.animesNonPresent = this.animes.length === 0;

            this.dataSource.data = this.animes;
            this.dataSource.paginator = this.paginator;
          });
        break;
      case 'rating':
        this.animeService.findByRating(this.valor)
          .subscribe((response) => {
            this.animes = response;
            this.isLoadding = false;
            this.animesNonPresent = this.animes.length === 0;

            this.dataSource.data = this.animes;
            this.dataSource.paginator = this.paginator;
          });
        break;
      case 'source':
        this.animeService.findBySource(this.valor)
          .subscribe((response) => {
            this.animes = response;
            this.isLoadding = false;
            this.animesNonPresent = this.animes.length === 0;

            this.dataSource.data = this.animes;
            this.dataSource.paginator = this.paginator;
          });
        break;
      default:
        window.location.reload();
        return;
    }
  }
  sinEstudios(): void {
    this.animeService.findWithoutStudios()
      .subscribe((response)=>{
        this.animes=response;
        this.isLoadding=false;
        this.animesNonPresent=this.animes.length===0;


        this.dataSource.data = this.animes;
        this.dataSource.paginator = this.paginator;
      })
    console.log('Sin estudios');
  }
  sinLicenciantes(): void {
    this.animeService.findWithoutLicensors()
      .subscribe((response)=>{
        this.animes=response;
        this.isLoadding=false;
        this.animesNonPresent=this.animes.length===0;


        this.dataSource.data = this.animes;
        this.dataSource.paginator = this.paginator;
      })
    console.log('Sin licenciantes');
  }

  episodiosPares(): void {
    this.animeService.findEpisodesEven()
      .subscribe((response)=>{
        this.animes=response;
        this.isLoadding=false;
        this.animesNonPresent=this.animes.length===0;


        this.dataSource.data = this.animes;
        this.dataSource.paginator = this.paginator;
      })
    console.log('Sin licenciantes');
  }
  episodiosImpares(): void {
    this.animeService.findEpisodesOdd()
      .subscribe((response)=>{
        this.animes=response;
        this.isLoadding=false;
        this.animesNonPresent=this.animes.length===0;


        this.dataSource.data = this.animes;
        this.dataSource.paginator = this.paginator;
      })
    console.log('Sin licenciantes');
  }

  enviarFormulario(): void {
    // Verifica si los campos están definidos antes de llamar a la función
    if ((this.datos.campo1 && this.datos.campo2)&&(this.datos.campo1<this.datos.campo2)) {
      // Llamada a la función con parámetros

      this.funcionConParametros(this.datos.campo1, this.datos.campo2);
    } else {
      console.error('Por favor, complete ambos campos antes de enviar el formulario.');
    }
  }

  // Función que toma dos parámetros
  funcionConParametros(param1: number, param2: number): void {
    this.animeService.findBetweenScoreRange(param1,param2)
      .subscribe((response)=>{
        this.animes=response;
        this.isLoadding=false;
        this.animesNonPresent=this.animes.length===0;


        this.dataSource.data = this.animes;
        this.dataSource.paginator = this.paginator;
      })
    }
  }
