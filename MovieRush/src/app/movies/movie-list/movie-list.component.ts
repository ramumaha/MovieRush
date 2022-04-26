import { Component, OnInit ,Input, ViewEncapsulation } from '@angular/core';



interface moviePoster{
  imageSrc:string;
  imageAlt:string;

}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  
})
export class MovieListComponent implements OnInit {
  @Input() posters:moviePoster[]=[];
  // transpose=true;
  // constructor() { }
  ngOnInit() {
  }
  title = "CodeSandbox";
  FundClasses = {
    FundDetailsViewModel: [
      {
        CogencyClasses: [
          {
            Id: 0,
            FundId: 0,
            ShareClass: "Assign Cogency Fund First",
            LocalCurrency: null,
            Name: "Assign Cogency Fund First "
          }
        ],
        FundClassDetailsViewModel: [
          {
            Id: 250033,
            Description: "Class B",
            InvestedAmount: null,
            InceptionDate: null,
            LegalFundClassId: 11166,
            DataReference: null,
            CogencyClassId: null,
            ClosureStatusId: null,
            IsSidePocket: false,
            IsThematic: false,
            VehicleTypeId: null,
            FundId: 5508
          },
          {
            Id: 100541,
            Description: "Class A",
            InvestedAmount: null,
            InceptionDate: null,
            LegalFundClassId: 11167,
            DataReference: null,
            CogencyClassId: null,
            ClosureStatusId: null,
            IsSidePocket: false,
            IsThematic: false,
            VehicleTypeId: null,
            FundId: 5508
          }
        ],
        PrimaryLegalFundClasses: [
          { Id: 5508, Description: "Class A", ClassType: 1 },
          { Id: 5508, Description: "Class B", ClassType: 1 }
        ]
      },
      {
        CogencyClasses: [
          {
            Id: 1121,
            FundId: 652,
            ShareClass: "Class B",
            LocalCurrency: "USD",
            Name: "Class B USD"
          }
        ],
        FundClassDetailsViewModel: [
          {
            Id: 250028,
            Description: "Class A",
            InvestedAmount: 23732600,
            InceptionDate: null,
            LegalFundClassId: 13713,
            DataReference: null,
            CogencyClassId: 1121,
            ClosureStatusId: null,
            IsSidePocket: false,
            IsThematic: false,
            VehicleTypeId: null,
            FundId: 237146
          },
          {
            Id: 250032,
            Description: "Class D",
            InvestedAmount: null,
            InceptionDate: "2014-07-31T00:00:00",
            LegalFundClassId: 13714,
            DataReference: null,
            CogencyClassId: null,
            ClosureStatusId: null,
            IsSidePocket: false,
            IsThematic: false,
            VehicleTypeId: null,
            FundId: 237146
          },
          {
            Id: 250031,
            Description: "Class C",
            InvestedAmount: null,
            InceptionDate: "2014-07-31T00:00:00",
            LegalFundClassId: 13715,
            DataReference: null,
            CogencyClassId: null,
            ClosureStatusId: null,
            IsSidePocket: false,
            IsThematic: false,
            VehicleTypeId: null,
            FundId: 237146
          },
          {
            Id: 250030,
            Description: "Class B1",
            InvestedAmount: null,
            InceptionDate: "2014-05-01T00:00:00",
            LegalFundClassId: 13716,
            DataReference: null,
            CogencyClassId: null,
            ClosureStatusId: null,
            IsSidePocket: false,
            IsThematic: false,
            VehicleTypeId: null,
            FundId: 237146
          },
          {
            Id: 250029,
            Description: "Class B",
            InvestedAmount: 119307314,
            InceptionDate: null,
            LegalFundClassId: 13717,
            DataReference: null,
            CogencyClassId: null,
            ClosureStatusId: null,
            IsSidePocket: false,
            IsThematic: false,
            VehicleTypeId: null,
            FundId: 237146
          }
        ],
        PrimaryLegalFundClasses: [
          { Id: 237146, Description: "Class A", ClassType: 3 },
          { Id: 237146, Description: "Class B", ClassType: 3 },
          { Id: 237146, Description: "Class B1", ClassType: 3 },
          { Id: 237146, Description: "Class C", ClassType: 3 },
          { Id: 237146, Description: "Class D", ClassType: 3 }
        ]
      }
    ],
    VehicleTypes: [
      {
        Spf: false,
        Name: "Secondaries",
        SortOrder: null,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      },
      {
        Spf: false,
        Name: "Co-Investment (non-SPF)",
        SortOrder: 1,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: true,
        IsCardiff: true
      },
      {
        Spf: false,
        Name: "FX Trade",
        SortOrder: 2,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      },
      {
        Spf: false,
        Name: "Listed ETF",
        SortOrder: 3,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      },
      {
        Spf: false,
        Name: "Listed Security",
        SortOrder: 4,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      },
      {
        Spf: false,
        Name: "Mutual Fund",
        SortOrder: 5,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      },
      {
        Spf: false,
        Name: "Offshore Fund",
        SortOrder: 6,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      },
      {
        Spf: false,
        Name: "Onshore US - 40 Act Fund",
        SortOrder: 7,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      },
      {
        Spf: false,
        Name: "Onshore US Non - 40 Act Fund",
        SortOrder: 8,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      },
      {
        Spf: false,
        Name: "EnTrustPermal Product",
        SortOrder: 9,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      },
      {
        Spf: true,
        Name: "EnTrustPermal SPF - Standard",
        SortOrder: 10,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: true,
        IsCardiff: false
      },
      {
        Spf: true,
        Name: "EnTrustPermal SPF – 40 Act",
        SortOrder: 10,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      },
      {
        Spf: true,
        Name: "EnTrustPermal SPF – UCITS",
        SortOrder: 10,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      },
      {
        Spf: true,
        Name: "EnTrustPermal SPF - Blocker",
        SortOrder: 10,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      },
      {
        Spf: true,
        Name: "EnTrustPermal SPF - Co-Investment",
        SortOrder: 10,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: true,
        IsCardiff: true
      },
      {
        Spf: true,
        Name: "EnTrustPermal SPF - Special Sit",
        SortOrder: 10,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: true,
        IsCardiff: true
      },
      {
        Spf: false,
        Name: "Private Equity",
        SortOrder: 11,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: true,
        IsCardiff: false
      },
      {
        Spf: false,
        Name: "Side-Pocket",
        SortOrder: 12,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: true,
        IsCardiff: false
      },
      {
        Spf: false,
        Name: "Special Situation (non-SPF)",
        SortOrder: 13,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: true,
        IsCardiff: true
      },
      {
        Spf: false,
        Name: "Third Party Fund of Funds",
        SortOrder: 14,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      },
      {
        Spf: false,
        Name: "UCITS",
        SortOrder: 15,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      },
      {
        Spf: false,
        Name: "Other",
        SortOrder: 50,
        AumReadOnly: false,
        PerformanceReadOnly: false,
        BloombergTickerRequired: false,
        ClassLevel: false,
        IsCardiff: false
      }
    ],
    ClosureStatuses: [
      { Id: 110, Name: "Hard Closed", IsActive: true, SortOrder: null },
      { Id: 111, Name: "Open", IsActive: true, SortOrder: null },
      { Id: 112, Name: "Soft Closed", IsActive: true, SortOrder: null },
      { Id: 1, Name: "Open - to all", IsActive: true, SortOrder: 1 },
      { Id: 2, Name: "Open - to Permal only", IsActive: true, SortOrder: 2 },
      { Id: 3, Name: "Closed - hard", IsActive: true, SortOrder: 3 },
      {
        Id: 104,
        Name: "Closed - with wait list",
        IsActive: true,
        SortOrder: 4
      },
      {
        Id: 100,
        Name: "Closed - but will reopen",
        IsActive: true,
        SortOrder: 5
      },
      {
        Id: 21,
        Name: "Closed - but replacing redemptions",
        IsActive: true,
        SortOrder: 6
      },
      { Id: 101, Name: "Redemptions Gated", IsActive: true, SortOrder: 7 },
      { Id: 102, Name: "Redemptions Suspended", IsActive: true, SortOrder: 8 },
      { Id: 103, Name: "In Liquidation", IsActive: true, SortOrder: 9 }
    ]
  };

  fundClassDetailsViewModelData = [];
  transpose = true;

  constructor() {
    this.FundClasses.FundDetailsViewModel.filter(
      data =>
        (this.fundClassDetailsViewModelData = [
          ...this.fundClassDetailsViewModelData,
          ...data.FundClassDetailsViewModel
        ])
    );
  }

  toggleTranspose() {
    this.transpose = !this.transpose;
  }

}

