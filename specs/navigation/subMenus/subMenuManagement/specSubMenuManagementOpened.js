const SubMenuManagement = require('../../../../navigation/subMenus/subMenuManagement/subMenuManagement.po');
const Selectors = require ('../../../../util/Selectors');
const selectors = new Selectors();

describe('/e2e/specs/navigation/subMenus/subMenuManagement/specSubMenuManagementOpened.js',function(){

    let subMenuManagement;

                    //Gerenciar//

    it ('Management Old Opened', function(){

        const selectorSubMenuOldManagement = ".test-submenu-old-management";
        const selectorElementToSpec = ".test-opened-old-management";
        const attributeNameToSpec = 'ng-controller';
        const attributeValueToSpec = 'EntidadeCtrl';

        validateSubMenuByAttribute(selectorSubMenuOldManagement,selectorElementToSpec, 
            attributeNameToSpec, attributeValueToSpec);
    })

    it ('Management Beta Opened', function(){
        
        const selectorSubMenuBetaManagement = ".test-submenu-beta-management";
        const selectorElementToSpec = ".test-opened-beta-management";
        const attributeNameToSpec = 'tg-lang';
        const attributeValueToSpec = "'workpackage.' + (type | lowercase)";

        validateSubMenuByAttribute(selectorSubMenuBetaManagement,selectorElementToSpec, 
            attributeNameToSpec, attributeValueToSpec);

    })

    it ('Portfolio Manager Opened', function () {

        const selectorSubMenuPortofolioManagent = ".test-submenu-portfolio-manager";
        const selectorElementToSpec = ".test-opened-portfolio-manager";
        const attributeNameToSpec = 'tg-lang';
        const attributeValueToSpec = "'javax.portlet.title.portfolio_manager'";

        validateSubMenuByAttribute(selectorSubMenuPortofolioManagent,selectorElementToSpec, 
            attributeNameToSpec, attributeValueToSpec);
    })

                        // TO DO
    // it ('Analisys Management Opened', function(){
        
    //     const selectorSubMenuAnalisysManagement = "test-submenu-analisys-management";

    //     subMenuManagement = new SubMenuManagement(selectorSubMenuAnalisysManagement);

    //     subMenuManagement.open();

    //     let elto = selectors.byCss(".");

    //     subMenuManagement.validate(elto, "", "");
    // })
    
    it ('Reports Management Opened', function(){

        const selectorSubMenuReportsManagement = ".test-submenu-reports";
        const selectorElementToSpec = ".test-opened-reports-management";
        const attributeNameToSpec = 'title';
        const attributeValueToSpec = "planooperativo.titulo-pagina-relatorio";

        validateSubMenuByAttribute(selectorSubMenuReportsManagement,selectorElementToSpec, 
            attributeNameToSpec, attributeValueToSpec);
    })

    it ('Offline Management Opened', function(){
        
        const selectorSubMenuOffline = ".test-submenu-offline";
        const selectorElementToSpec = ".test-opened-offline-management";
        const attributeNameToSpec = 'title';
        const attributeValueToSpec = "planooperativo.offlines";

        validateSubMenuByAttribute(selectorSubMenuOffline,selectorElementToSpec, 
            attributeNameToSpec, attributeValueToSpec);
    })
                    // TO DO
    // it ('Licitacao Management Opened', function(){
        
    //     const selectorSubMenuLicitacao = ".test-submenu-licitacao";

    //     subMenuManagement = new SubMenuManagement(selectorSubMenuLicitacao);

    //     subMenuManagement.open();

    //     let elto = selectors.byCss(".");

    //     subMenuManagement.validate(elto, "", "");
    // })

    it ('Region Map Opened', function(){

        const selectorSubMenuRegionMap = ".test-submenu-region-map";
        const selectorElementToSpec = ".test-opened-region-map";
        const attributeNameToSpec = 'tg-lang';
        const attributeValueToSpec = "'maparegionalizacao.tipo-place'";

        validateSubMenuByAttribute(selectorSubMenuRegionMap,selectorElementToSpec, 
            attributeNameToSpec, attributeValueToSpec);        
    })

    it ('Meeting Manager Opened', function(){

        const selectorSubMenuMeetingManager = ".test-submenu-meeting-manager";
        const selectorElementToSpec = ".test-opened-meeting-manager";
        const attributeNameToSpec = 'tg-lang';
        const attributeValueToSpec =  "'javax.portlet.title.meeting_manager'";

        validateSubMenuByAttribute(selectorSubMenuMeetingManager,selectorElementToSpec, 
            attributeNameToSpec, attributeValueToSpec); 
    })

    it ('Assignment Manager Opened', function(){

        const selectorSubMenuAssignmentManager = ".test-submenu-assignment-manager";
        const selectorElementToSpec = ".test-opened-assignment-manager";
        const attributeNameToSpec = 'tg-lang';
        const attributeValueToSpec =  "'javax.portlet.title.assignment_manager'";

        validateSubMenuByAttribute(selectorSubMenuAssignmentManager,selectorElementToSpec, 
            attributeNameToSpec, attributeValueToSpec); 
    })

    it ('Mind Map Manager Opened', function(){

        const selectorSubMenuMindMapManager = ".test-submenu-mind-map";

        subMenuManagement = new SubMenuManagement(selectorSubMenuMindMapManager);

        subMenuManagement.open();

        let elto = selectors.byId("test-mind_map");

        subMenuManagement.isPresent(elto);

    })

    it('Efisco Management Opened', function(){
        
        const selectorSubMenuEfiscoManagement = ".test-submenu-efisco";

        subMenuManagement = new SubMenuManagement(selectorSubMenuEfiscoManagement);

        subMenuManagement.open();

        let elto = selectors.byId("test-efisco");

        subMenuManagement.isPresent(elto);

    })

                    //Cadastro Auxiliares//

    it ('Auxiliary Beta Opened', function(){

        const selectorAuxiliaryBetaShortcut = ".test-submenu-auxiliary-register-beta";
        const selectorElementToSpec = ".test-opened-beta-auxiliar";
        const attributeNameToSpec = 'tg-lang';
        const attributeValueToSpec =  "'planooperativo.cadastro-auxiliars'";

        validateSubMenuByAttribute(selectorAuxiliaryBetaShortcut,selectorElementToSpec, 
            attributeNameToSpec, attributeValueToSpec);

    })

    it ('Responsible View Opened', function(){

        const selectorResponsibleShortcut = ".test-submenu-responsible";
        const selectorElementToSpec = ".test-search-responsible";
        const attributeNameToSpec = 'title';
        const attributeValueToSpec =  "planooperativo.busca-responsavels";

        validateSubMenuByAttribute(selectorResponsibleShortcut,selectorElementToSpec, 
            attributeNameToSpec, attributeValueToSpec);        
    })
    
    it ('Old Agency View Opened', function(){
        const selectorAgencyShortcut = ".test-submenu-agency";

        subMenuManagement = new SubMenuManagement(selectorAgencyShortcut);
        
        subMenuManagement.open();

        let elto = selectors.byCss(".test-opened-listagem-agencys")

        subMenuManagement.isPresent(elto);
    });

    it ('Tag View Opened', function(){
        const selectorTagShortcut = ".test-submenu-tag";

        subMenuManagement = new SubMenuManagement(selectorTagShortcut);
        
        subMenuManagement.open();

        let elto = selectors.byCss(".test-opened-tags")

        subMenuManagement.isPresent(elto);
    });

    it ('Fonte Receita View Opened', function(){
        const selectorMoneySource = ".test-submenu-money-source";

        subMenuManagement = new SubMenuManagement(selectorMoneySource);
        
        subMenuManagement.open();

        let elto = selectors.byCss(".test-opened-fonte-receita")

        subMenuManagement.isPresent(elto);
    });

    it ('Grupo Despesa View Opened', function(){
        const selectorExpensiveGroup = ".test-submenu-expense-group";

        subMenuManagement = new SubMenuManagement(selectorExpensiveGroup);
        
        subMenuManagement.open();

        let elto = selectors.byCss(".test-opened-grupo-despesas")

        subMenuManagement.isPresent(elto);
    });

    function validateSubMenuByAttribute(selectorLinkToClick, seletorForElement, 
        attributeNameToSpec, attributeValueToSpec){
        
        subMenuManagement = new SubMenuManagement(selectorLinkToClick);
        
        subMenuManagement.open();
        
        let elto = selectors.byCss(seletorForElement);
        
        subMenuManagement.validate(elto, attributeNameToSpec, attributeValueToSpec);
    }

})
