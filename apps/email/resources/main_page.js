// ==========================================================================
// Project:   Email - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Email */

var tableColumns = [
  SC.TableColumn.create({
    key:   'from',
    label: 'From',
    width: 500
  }),
  SC.TableColumn.create({
    key:   'subject',
    label: 'Subject',
    width: 200,
    minWidth: 150
  }),
  SC.TableColumn.create({
    key:   'date',
    label: 'Date',
    width: 200,
    minWidth: 150
  })  
];

// This page describes the main user interface for your application.  
Email.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'toolbarView splitView'.w(),
    
    toolbarView: SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 36 },
      childViews: 'labelView'.w(),
      anchorLocation: SC.ANCHOR_TOP,

      labelView: SC.LabelView.design({
        layout: { centerY: 0, left: 8, height: 24, width: 300 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        value: "SproutCore E-mail Demo"
      })
    }),

    splitView: SC.SplitView.design({
      layout: { top: 36, left: 0, bottom: 0, right: 0 },
      defaultThickness: 200,

      topLeftView: SC.ScrollView.design({
        hasHorizontalScroller: NO,
        contentView: SC.SourceListView.design({
        })
      }),

      bottomRightView: SC.SplitView.design({
        defaultThickness: 300,
        layoutDirection: SC.VERTICAL,

        // TODO: Why is the splitter heavily blue-tinged?

        topLeftView: SC.TableView.design({
          columns: tableColumns,
          flexibleColumn: tableColumns.objectAt(0),
          canReorderContent: YES
        }),

        bottomRightView: SC.View.design({
          backgroundColor: 'white'
        })
      })
    })
  })

});
