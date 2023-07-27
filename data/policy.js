export default {
    manage_secrete: { // class level resources (main)     
        accessCtrl: { // access controll level
            users: ["managers"],
            accessLevel: [
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: [], // suggestion // if user giving access ESA , since we esa required dataset too we will give suggestion 
        necessitiesAccess: [], // list of resources which require to manage main resource it will only as importants  
        itemsList: true // is Items level access allow
    },
    manage_position_list: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        askQuestions: [ // this list will depened on tenant privilege
            "user_pos_add_manual_one_by_one", "user_pos_manual_file_upload",
            "user_pos_auto_sync_from_collection", "user_pos_allow_download_file_upload",
            "user_pos_allow_hierarchy_tree"
        ],
        complementryPrivsSuggestions: ["manage_employee_list"],
        necessitiesAccess: [],
    },
    manage_employee_list: { // only class
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        askQuestions: [ // this list will depened on tenant privilege
            "user_manage_manual_file_upload", "user_manage_auto_sync",
            "user_manage_bulk_password_reset", "user_manage_allow_employee_list_downlod",
            "user_manage_access_log", "user_manage_access_bulk_password_reset_log",
            "user_manage_allow_to_change_password", "user_manage_opt_to_email",
            "user_manage_send_otp_to_mobile", "user_manage_send_otp_admin",
            "user_manage_allow_to_edit_info", "user_manage_allow_to_link_position",
            "user_manage_create_and_edit_user_manual",
        ],
        complementryPrivsSuggestions: ["manage_position_list"],
        users: ["admin"],
        necessitiesAccess: []
    },
    user_manage_allow_users_list: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: [],
        users: ["admin"],
        necessitiesAccess: []
    },
    journey: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["journey_queue_management", "manage_secrete"],
        necessitiesAccess: [{
            prvName: "journey_log_access",
            acccess_level_of_main_resource: ["use", "manage"], // if journey access is manage or use then we give by necessities access to BU manages,
            accessCtrl: ["read"]
        },
        {
            prvName: "master_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "core_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "trx_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "special_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        ],
        itemsList: true
    },
    journey_log_access: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["journey"],
        necessitiesAccess: [],
        itemsList: true
    },
    journey_queue_management: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "manage",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["journey"],
        necessitiesAccess: [],
        // itemsList: false
    },
    master_data: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["manage_connection"],
        necessitiesAccess: [],
        itemsList: true
    },
    core_data: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["manage_connection"],
        necessitiesAccess: [],
        itemsList: true
    },
    trx_data: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["manage_connection"],
        necessitiesAccess: [],
        itemsList: true
    },
    special_data: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["manage_connection"],
        necessitiesAccess: [],
        itemsList: true
    },
    special_data: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["manage_connection"],
        necessitiesAccess: [],
        itemsList: true
    },
    scheme: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["scheme_setting"],
        necessitiesAccess: [],
        itemsList: true
    },
    scheme_setting: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "manage",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["ecv2", "ecv3"],
        necessitiesAccess: [],
    },
    //////
    report: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["ecv2", "ecv3"],
        necessitiesAccess: [{
            prvName: "ecv3",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["read"]
        }, {
            prvName: "ecv2",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["read"]
        }],
        itemsList: true
    },
    manage_bi: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["ecv2", "ecv3"],
        necessitiesAccess: [{
            prvName: "ecv3",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "ecv2",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "supplement",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "element_registry",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["manage"]
        },
        ],
        itemsList: true
    },
    supplement: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["manage_bi", "ecv3", "ecv2"],
        necessitiesAccess: [{
            prvName: "ecv3",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "ecv2",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "master_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "core_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "iqc_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "consolidated_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        }
        ],
        itemsList: true
    },
    ecv3: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["manage_bi", "ecv3", "ecv2"],
        necessitiesAccess: [{
            prvName: "master_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "core_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "iqc_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "consolidated_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        }
        ],
        itemsList: true
    },
    ecv2: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["manage_bi", "ecv3", "ecv2"],
        necessitiesAccess: [{
            prvName: "master_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "core_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "iqc_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "consolidated_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        }
        ],
        itemsList: true
    },

    announcement: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: [],
        necessitiesAccess: [{
            prvName: "user_manage_allow_users_list",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "ecv2",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "ecv3",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "element_registry",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        }
        ],
        itemsList: true
    },
    widget: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: [],
        necessitiesAccess: [{
            prvName: "ecv2",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "ecv3",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        }
        ],
        itemsList: true
    },
    workFlows: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: [],
        necessitiesAccess: [{
            prvName: "ecv2",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "ecv3",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "master_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "core_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "iqc_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "consolidated_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "chart_builder",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["manage"]
        },
        {
            prvName: "kbet_services",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        ],
        itemsList: true
    },
    kbet_services: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: [],
        necessitiesAccess: [{
            prvName: "ecv2",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "ecv3",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "master_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "core_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "iqc_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "consolidated_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "chart_builder",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["manage"]
        },
        {
            prvName: "kbet_services",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        ],
        itemsList: true
    },
    bi_analysis: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["psb"],
        necessitiesAccess: [{
            prvName: "ecv2",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "ecv3",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "supplement",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "element_registry",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["manage"]
        },

        ],
        itemsList: true
    },
    inc_simulator: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["psb"],
        necessitiesAccess: [{
            prvName: "ecv2",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "ecv3",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "master_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "core_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "iqc_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "consolidated_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        ],
        itemsList: true
    },
    psb: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["kpi", "esa"],
        necessitiesAccess: [{
            prvName: "kpi",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "special_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        }
        ],
        itemsList: true
    },
    kpi: { // class + item
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["esa"],
        necessitiesAccess: [{
            prvName: "master_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "core_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "iqc_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "consolidated_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["manage"]
        },
        ],
        itemsList: true
    },
    esa: {
        accessCtrl: {
            users: ["managers"],
            accessLevel: [
                "ownership",
                "manage",
                "use",
                "read",
                "block",
                "none"
            ]
        },
        complementryPrivsSuggestions: ["master_data", "trx_data", "special_data"],
        necessitiesAccess: [{
            prvName: "master_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "core_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "iqc_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        {
            prvName: "consolidated_data",
            acccess_level_of_main_resource: ["use", "manage"],
            accessCtrl: ["use"]
        },
        ],
        itemsList: true
    },

}

