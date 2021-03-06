// ==========================================================================
// SampleControls.PaneController
// ==========================================================================
/*globals SampleControls */

sc_require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author    AuthorName
  @version 0.1
  @static
*/
SampleControls.paneController = SC.Object.create(
/** @scope SampleControls.paneController */ {
  pane: null,

  showPanelPane: function() {
    var pane = SC.PanelPane.create({
      layout: { width: 400, height: 200, centerX: 0, centerY: 0 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 },
        childViews: 'labelView buttonView'.w(),

        labelView: SC.LabelView.extend({
          layout: { centerY: -10, height: 24, left: 0, right: 0 },
          textAlign: SC.ALIGN_CENTER,
          controlSize: SC.LARGE_CONTROL_SIZE,
          value: "SC.PanelPane"
        }),
        
        buttonView: SC.ButtonView.extend({
          layout: { width: 80, bottom: 20, height: 24, centerX: 0 },
          title: "Hide",
          action: "remove",
          target: "SampleControls.paneController.pane"
        })
      })
    });
    pane.append();
    this.set('pane', pane);
  },

  showSheetPane: function() {
    var pane = SC.SheetPane.create({
      layout: { width: 400, height: 200, centerX: 0 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 },
        childViews: 'labelView buttonView'.w(),

        labelView: SC.LabelView.extend({
          layout: { centerY: -10, height: 24, left: 0, right: 0 },
          textAlign: SC.ALIGN_CENTER,
          controlSize: SC.LARGE_CONTROL_SIZE,
          value: "SC.SheetPane"
        }),
        
        buttonView: SC.ButtonView.extend({
          layout: { width: 80, bottom: 20, height: 24, centerX: 0 },
          title: "Hide",
          action: "remove",
          target: "SampleControls.paneController.sheetPane"
        })
      })
    });
    pane.append();
    this.set('sheetPane', pane);
  },

  showAlertPaneWarn: function() {
    var pane = SC.AlertPane.warn("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', this);      
    pane.append();
  },

  showAlertPaneError: function() {
    var pane = SC.AlertPane.error("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', this);      
    pane.append();
  },

  showAlertPaneInfo: function() {
    var pane = SC.AlertPane.info("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', this);      
    pane.append();
  },

  showAlertPanePlain: function() {
    var pane = SC.AlertPane.plain("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', this);      
    pane.append();
  },

  showAlertPaneShow: function() {
    var pane = SC.AlertPane.show("AlertPane.message", 'AlertPane.description', 'AlertPane.caption', "OK", "Cancel", 'Other...', 'sc-icon-tools-24', this);      
    pane.append();
  },

  showPalettePane: function() {
    var pane = SC.PalettePane.create({
      layout: { width: 400, height: 200, right: 20, top: 0 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 },
        childViews: 'labelView buttonView'.w(),

        labelView: SC.LabelView.extend({
          layout: { centerY: -10, height: 24, left: 0, right: 0 },
          textAlign: SC.ALIGN_CENTER,
          controlSize: SC.LARGE_CONTROL_SIZE,
          value: "SC.PalettePane"
        }),
        
        buttonView: SC.ButtonView.extend({
          layout: { width: 80, bottom: 20, height: 24, centerX: 0 },
          title: "Hide",
          action: "remove",
          target: "SampleControls.paneController.palettePane"
        })
      })
    });
    pane.append();
    this.set('palettePane', pane);
  },

  showPickerPaneDefault: function(view) {
    var pane = SC.PickerPane.create({
      layout: { width: 300, height: 200 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 }
      })
    });
    pane.popup(view);
  },

  showPickerPaneMenu: function(view) {
    var pane = SC.PickerPane.create({
      layout: { width: 300, height: 200 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 }
      })
    });
    pane.popup(view, SC.PICKER_MENU);
  },

  showPickerPaneFixed: function(view) {
    var pane = SC.PickerPane.create({
      layout: { width: 300, height: 200 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 }
      })
    });
    pane.popup(view, SC.PICKER_FIXED);
  },

  showPickerPanePointer: function(view) {
    var pane = SC.PickerPane.create({
      layout: { width: 300, height: 200 },
      contentView: SC.View.extend({
        layout: { top: 0, left: 0, bottom: 0, right: 0 }
      })
    });
    pane.popup(view, SC.PICKER_POINTER, [3,0,1,2,2]);
  },
  
  showMenuPane: function(view) {
    var iconURL= "http://www.freeiconsweb.com/Icons/16x16_people_icons/People_046.gif" ;
    var method = function() { console.log("done"); } ;
    var pane = SC.MenuPane.create({
                 items: [ { title: "Item1", isEnabled: YES, icon: iconURL, 
                   separator: NO, action: method ,
                   checkbox:YES, shortCut: "ctrl_z", keyEquivalent: "ctrl_z" },
                   { title: "", isEnabled: YES, icon: null, separator: YES},
                   { title: "Item2", isEnabled: NO, icon: iconURL, separator: NO },
                   { title: "Item3", isEnabled: YES, icon: iconURL, separator: NO , branchItem: YES,
                   subMenu: SC.MenuPane.create({
                     items: ["title1","title2"],
                     layout: { width: 150 },
                     contentView: SC.View.extend({
                       layout: { width: 150, height: 200 }
                     })
                   })},
                   { title: "Item3", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item4", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item5", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item6", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item7", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item8", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item9", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item10", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item11", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item12", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item13", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item14", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item15", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item16", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item17", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item18", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item19", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item20", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item21", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item22", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item23", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item24", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item25", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item26", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item27", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item28", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item29", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item30", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item31", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item32", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item33", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item34", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item35", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item36", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item37", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item38", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item39", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item40", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item41", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item42", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item43", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item44", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item45", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item46", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item47", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item48", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item49", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item50", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item51", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item52", isEnabled: YES, icon: iconURL, separator: NO },
                   { title: "Item53", isEnabled: YES, icon: iconURL, separator: NO }
                   
                   ],
                 isEnabled: YES,
                 itemIsEnabledKey: "isEnabled",
                 itemTitleKey: "title",
                 itemIconKey: "icon",
                 itemSeparatorKey: 'separator',
                 itemActionKey: 'action',
                 itemCheckboxKey: 'checkbox',
                 itemBranchKey: 'branchItem',  
                 preferType: SC.PICKER_MENU,
                 subMenuKey: 'subMenu',
                 itemShortCutKey: 'shortCut',
                 layout: { width: 150 },
                 itemKeyEquivalentKey: 'keyEquivalent',
                 itemHeightKey: 'height',
                 contentView: SC.View.extend({
                   layout: { width: 150, height: 200 }
                 })
               }) ;
    pane.popup(view) ;
  },

  hidePane: function() {
    this.pane.remove();
  }

}) ;
