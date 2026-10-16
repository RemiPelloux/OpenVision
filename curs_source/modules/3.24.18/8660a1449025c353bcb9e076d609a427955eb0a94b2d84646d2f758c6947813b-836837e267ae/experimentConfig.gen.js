import { Xed } from "./agent-store-ids.ts";
import { m_t } from "./auto-spillover-ui.ts";
import { AIo, Zgr, xIo } from "./environment-setup.ts";
import { Iet } from "./glass-perf-vote-config.ts";
import { nl } from "./index.ts";
import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { Bhn, FTy, Xb, o_r, xS, ze } from "./ze.js";
var xld, BTy, gAe, C_t, KOe, Uhn, hPo, Ald, Rld, Pld, a_r, l_r, Mld, pPo, mPo, Dld, Nld, UTy, Lld, Bte, jhn, gPo;
export { Ald, BTy, Bte, C_t, Dld, KOe, Lld, Mld, Nld, Pld, Rld, UTy, Uhn, a_r, gAe, gPo, hPo, jhn, l_r, mPo, pPo, xld };
var __wakaru_jse_initialized = false;
export function jse() {
if (__wakaru_jse_initialized) return;
__wakaru_jse_initialized = true;
"use strict";
E(), nl(), iv(), xld = ze.enum([
    "off",
    "default-on",
    "default-off",
    "hidden",
    "end-of-life",
    "internal"
]), BTy = ze.object({
    lifecycle: xld,
    pickerDisplayName: ze.string().min(1).nullish(),
    upgradeModelId: ze.string().min(1).nullish()
}), gAe = {
    agent_goal_continuation: {
        client: !0,
        default: !0
    },
    nal_websocket_client: {
        client: !0,
        default: !1
    },
    agent_queued_prompt_new_request_id: {
        client: !0,
        default: !1
    },
    org_billing_admin_role: {
        client: !0,
        default: !1
    },
    team_members_show_org_admins: {
        client: !0,
        default: !0
    },
    org_team_settings_copy_on_create: {
        client: !0,
        default: !0
    },
    org_team_settings_copy_to_existing_team: {
        client: !0,
        default: !1
    },
    org_credit_request_button_hide: {
        client: !0,
        default: !1
    },
    sso_jit_auto_enrollment_settings: {
        client: !0,
        default: !1
    },
    sand_mobile_session_upgrade: {
        client: !0,
        default: !0
    },
    remote_agent_host_mobile: {
        client: !0,
        default: !1
    },
    response_comparison_comment_prompt: {
        client: !0,
        default: !1
    },
    cursor_new_colors: {
        client: !0,
        default: !1
    },
    grok_bot_setup_checklist: {
        client: !0,
        default: !0
    },
    grok_bot_hibernated_owner_vm_termination: {
        client: !0,
        default: !0
    },
    grok_bot_team_bot_group_restrictions: {
        client: !0,
        default: !1
    },
    glass_grok_bot_topbar_cta_show: {
        client: !0,
        default: !1,
        requiresAuthenticatedBootstrap: !0
    },
    grok_bot_admin_enterprise_controls_frontend_enabled: {
        client: !0,
        default: !1
    },
    grok_bot_merged_bots_view_enabled: {
        client: !0,
        default: !1
    },
    dashboard_grok_bot_onboarding_checklist: {
        client: !0,
        default: !1
    },
    dashboard_team_checklist_origin_setup: {
        client: !0,
        default: !1
    },
    dashboard_grok_bot_terms: {
        client: !0,
        default: !1
    },
    gb_block_papered_org_signups: {
        client: !0,
        default: !1
    },
    sand_mobile_notification_sounds: {
        client: !0,
        default: !1
    },
    sand_mobile_agent_computer_console: {
        client: !0,
        default: !0
    },
    sand_mobile_i18n: {
        client: !0,
        default: !0
    },
    sand_mobile_home_unread_jump_pills: {
        client: !0,
        default: !1
    },
    sand_mobile_failures_screen: {
        client: !0,
        default: !1
    },
    sand_mobile_unified_marketplace: {
        client: !0,
        default: !1
    },
    sand_mobile_feedback_kill_switch: {
        client: !0,
        default: !1
    },
    sand_mobile_app_store_update_indicator: {
        client: !0,
        default: !0
    },
    sand_mobile_profile_multimedia_tabs: {
        client: !0,
        default: !0
    },
    sand_mobile_slash_skill_trigger: {
        client: !0,
        default: !0
    },
    sand_mobile_dictation_diagnostics: {
        client: !0,
        default: !0
    },
    sand_mobile_manage_subscription_kill_switch: {
        client: !0,
        default: !1
    },
    sand_mobile_change_limit_kill_switch: {
        client: !0,
        default: !1
    },
    sand_enable_home_pull_to_refresh: {
        client: !0,
        default: !1
    },
    sand_special_settings: {
        client: !0,
        default: !1
    },
    sand_messages_tools: {
        client: !0,
        default: !1
    },
    sand_mobile_local_tools: {
        client: !0,
        default: !1
    },
    sand_connected_activity_tool: {
        client: !0,
        default: !1
    },
    grok_bot_hide_internal_details: {
        client: !0,
        default: !0
    },
    grok_bot_active_reactions: {
        client: !0,
        default: !0
    },
    grok_bot_link_items: {
        client: !0,
        default: !1
    },
    grok_bot_renamed_prompt_markers: {
        client: !0,
        default: !1
    },
    sand_automation_agent_gone_terminal: {
        client: !0,
        default: !1
    },
    grok_bot_builtin_admin_tool_policy: {
        client: !0,
        default: !1
    },
    mcp_grant_migration_enabled: {
        client: !0,
        default: !1
    },
    hosted_mcp_routing_enabled: {
        client: !0,
        default: !1
    },
    grok_bot_durable_identity: {
        client: !0,
        default: !0
    },
    grok_bot_durable_identity_writes: {
        client: !0,
        default: !0
    },
    grok_bot_identity_backfill: {
        client: !0,
        default: !0
    },
    grok_bot_temporal_harness: {
        client: !0,
        default: !1
    },
    grok_bot_stripe_link: {
        client: !0,
        default: !0
    },
    grok_bot_spend_approval_passkey: {
        client: !0,
        default: !1
    },
    sand_memory_dreaming: {
        client: !0,
        default: !1
    },
    sand_1pass_manual_service_acct: {
        client: !0,
        default: !0
    },
    sand_new_1pass: {
        client: !0,
        default: !1
    },
    sand_cloud_agent_artifacts: {
        client: !0,
        default: !0
    },
    sand_cloud_agent_status_stream: {
        client: !0,
        default: !1
    },
    grok_bot_cloud_agent_durable_watch: {
        client: !0,
        default: !1
    },
    grok_bot_cloud_agent_secret_forwarding: {
        client: !0,
        default: !1
    },
    grok_bot_mcp_catalog_status_killswitch: {
        client: !0,
        default: !1
    },
    sand_desktop_scm_connect: {
        client: !0,
        default: !1
    },
    sand_computer_use_unicode_typing: {
        client: !0,
        default: !1
    },
    sand_on_demand_settings: {
        client: !0,
        default: !1
    },
    store_billed_web_on_demand: {
        client: !0,
        default: !0
    },
    sand_notification_sounds: {
        client: !0,
        default: !1
    },
    sand_scheduled_computer_updates: {
        client: !0,
        default: !1,
        requiresAuthenticatedBootstrap: !0
    },
    grok_bot_network_debugger: {
        client: !0,
        default: !1
    },
    grok_bot_form_vault: {
        client: !0,
        default: !1
    },
    sand_agent_network: {
        client: !0,
        default: !1
    },
    sand_draft_external_message: {
        client: !0,
        default: !0
    },
    sand_draft_external_message_by_default: {
        client: !0,
        default: !1
    },
    sand_auto_review_selector: {
        client: !0,
        default: !1
    },
    sand_enable_pressure_cpu_profiler: {
        client: !0,
        default: !0
    },
    sand_enable_accent_theming: {
        client: !0,
        default: !1
    },
    grok_bot_all_bots_color_theming: {
        client: !0,
        default: !1
    },
    sand_xvf_typeface: {
        client: !0,
        default: !1
    },
    sand_anonymized_egress_telemetry: {
        client: !0,
        default: !0
    },
    service_account_spend_limit_enforcement: {
        client: !0,
        default: !1
    },
    sand_action_audit_logs: {
        client: !0,
        default: !1
    },
    grok_bot_conversation_gc: {
        client: !0,
        default: !0
    },
    sand_enable_bot2bot_cloud_agent_ui: {
        client: !0,
        default: !1,
        requiresAuthenticatedBootstrap: !0
    },
    sand_hide_at_mentions: {
        client: !0,
        default: !1
    },
    sand_agent_titles: {
        client: !0,
        default: !0
    },
    sand_stream_idle_deadline: {
        client: !0,
        default: !0
    },
    sand_enable_spoof_gpu: {
        client: !0,
        default: !1
    },
    sand_browser_hardware_profile: {
        client: !0,
        default: !1
    },
    sand_box_store_skip_inaccessible: {
        client: !0,
        default: !1
    },
    sand_working_state_warming: {
        client: !0,
        default: !0,
        requiresAuthenticatedBootstrap: !0
    },
    grok_bot_box_harness_turns_blocked: {
        client: !0,
        default: !1
    },
    sand_web_bot_auth_signing: {
        client: !0,
        default: !0
    },
    sand_web_bot_auth_sign_xhr_fetch: {
        client: !0,
        default: !0
    },
    sand_web_bot_auth_sign_iframes: {
        client: !0,
        default: !1
    },
    sand_transcript_store_read: {
        client: !0,
        default: !1
    },
    sand_transcript_store_first: {
        client: !0,
        default: !1
    },
    sand_transcript_server_tail: {
        client: !0,
        default: !1
    },
    sand_attachments_via_server: {
        client: !0,
        default: !1
    },
    sand_better_link_unfurling: {
        client: !0,
        default: !0
    },
    grok_bot_link_chip_preload: {
        client: !0,
        default: !1
    },
    sand_create_temporal_agents: {
        client: !0,
        default: !1
    },
    sand_client_pause: {
        client: !0,
        default: !1
    },
    sand_desktop_away_park: {
        client: !0,
        default: !1
    },
    sand_desktop_present_park: {
        client: !0,
        default: !1
    },
    sand_roster_waking_hold: {
        client: !0,
        default: !1
    },
    sand_sidebar_activity_recency: {
        client: !0,
        default: !1
    },
    sand_get_grok_bot_ios: {
        client: !0,
        default: !0
    },
    sand_grok_main_agent: {
        client: !0,
        default: !1
    },
    sand_widget_v0: {
        client: !0,
        default: !1
    },
    sand_tasks: {
        client: !0,
        default: !1
    },
    sand_chat_prose_15px: {
        client: !0,
        default: !1
    },
    sand_new_connect_button: {
        client: !0,
        default: !1
    },
    sand_rich_text: {
        client: !0,
        default: !1
    },
    grok_bot_draft_revision_highlight: {
        client: !0,
        default: !1
    },
    sand_profile_photo_edit: {
        client: !0,
        default: !1,
        requiresAuthenticatedBootstrap: !0
    },
    sand_hide_working_dot: {
        client: !0,
        default: !1
    },
    sand_invite_teammates: {
        client: !0,
        default: !1,
        requiresAuthenticatedBootstrap: !0
    },
    sand_grok_force_main_agent_selection: {
        client: !0,
        default: !1
    },
    sand_desktop_mount: {
        client: !0,
        default: !1
    },
    sand_marketplace_for_you_auth_aware: {
        client: !0,
        default: !1
    },
    sand_header_template_share_menu: {
        client: !0,
        default: !0
    },
    grok_bot_multiplayer: {
        client: !0,
        default: !1
    },
    grok_bot_group_chats: {
        client: !0,
        default: !1
    },
    grok_bot_team_bot_managers: {
        client: !0,
        default: !1
    },
    grok_bot_team_bot_access_list: {
        client: !0,
        default: !1
    },
    grok_bot_team_exclude_gsuite_plugins: {
        client: !0,
        default: !1
    },
    grok_bot_agent_mail: {
        client: !0,
        default: !1
    },
    grok_bot_agent_mail_multiple_inboxes: {
        client: !0,
        default: !1
    },
    grok_bot_scm_connect_card: {
        client: !0,
        default: !1
    },
    grok_bot_check_subscription_usage: {
        client: !0,
        default: !1
    },
    grok_bot_search_bot_templates: {
        client: !0,
        default: !1
    },
    grok_bot_template_onboarding: {
        client: !0,
        default: !0
    },
    grok_bot_documents: {
        client: !0,
        default: !1
    },
    grok_bot_documents_ui: {
        client: !0,
        default: !1
    },
    grok_bot_library_pages: {
        client: !0,
        default: !1
    },
    grok_bot_page_stage_chat: {
        client: !0,
        default: !1
    },
    grok_bot_files_stage: {
        client: !0,
        default: !1
    },
    grok_bot_library_v2: {
        client: !0,
        default: !1
    },
    grok_bot_documents_web: {
        client: !0,
        default: !1
    },
    grok_bot_library_external_docs: {
        client: !0,
        default: !1
    },
    grok_bot_pages_search: {
        client: !0,
        default: !1
    },
    sand_simplified_right_pane: {
        client: !0,
        default: !1
    },
    sand_cloud_agent_tasks_card: {
        client: !0,
        default: !1
    },
    sand_import_chrome_cookies: {
        client: !0,
        default: !1
    },
    agent_prompted_cookie_sync: {
        client: !0,
        default: !1
    },
    sand_voice_call: {
        client: !0,
        default: !1
    },
    sand_pitman: {
        client: !0,
        default: !1
    },
    sand_voice_outbound_call: {
        client: !0,
        default: !1
    },
    sand_voice_call_overheard: {
        client: !0,
        default: !1
    },
    sand_voice_stay_silent: {
        client: !0,
        default: !1
    },
    sand_voice_async_update: {
        client: !0,
        default: !0
    },
    sand_voice_reconnect: {
        client: !0,
        default: !0
    },
    sand_voice_resumption: {
        client: !0,
        default: !1
    },
    sand_voice_steer: {
        client: !0,
        default: !0
    },
    sand_voice_final_word: {
        client: !0,
        default: !1
    },
    sand_voice_memos: {
        client: !0,
        default: !0
    },
    sand_voice_memo_speed: {
        client: !0,
        default: !0
    },
    sand_voice_server_harness: {
        client: !0,
        default: !0
    },
    sand_mcp_apps: {
        client: !0,
        default: !1
    },
    sand_team_bot_voice_available: {
        client: !0,
        default: !1
    },
    sand_voice_call_settings_for_teammates: {
        client: !0,
        default: !1
    },
    sand_focus_staleness_catch_up: {
        client: !0,
        default: !1
    },
    disable_smart_auto_show_routed_model: {
        client: !0,
        default: !1
    },
    migrate_default_model_config_to_auto_smart_cost: {
        client: !0,
        default: !1
    },
    app_open_model_nudge_pre_render_only: {
        client: !0,
        default: !1
    },
    new_automation_templates_slack_github_triggers: {
        client: !0,
        default: !0
    },
    customer_evals_ui: {
        client: !0,
        default: !1
    },
    git_diff_collect_stderr: {
        client: !0,
        default: !1
    },
    glass_chat_switch_tracing: {
        client: !0,
        default: !1
    },
    glass_webview_guest_render_throttle_killswitch: {
        client: !0,
        default: !1
    },
    glass_chat_switch_post_paint_commit: {
        client: !0,
        default: !1
    },
    glass_dispose_workspace_on_release: {
        client: !0,
        default: !1
    },
    glass_git_diff_meter: {
        client: !0,
        default: !1
    },
    glass_agent_worktree_reroot_prompt: {
        client: !0,
        default: !0
    },
    glass_cloud_meta_agents: {
        client: !0,
        default: !1
    },
    named_agent_single_session: {
        client: !0,
        default: !1
    },
    glass_empty_state_recommended_actions: {
        client: !0,
        default: !1
    },
    glass_branch_picker_redesign: {
        client: !0,
        default: !1
    },
    glass_triggers_naming: {
        client: !0,
        default: !1
    },
    unified_composer_tray_debug: {
        client: !0,
        default: !1
    },
    glass_remember_new_agent_environment_selection: {
        client: !0,
        default: !0
    },
    glass_editor_shadow_isolation: {
        client: !0,
        default: !0
    },
    glass_defer_shadow_style_rebuild: {
        client: !0,
        default: !1
    },
    sand_audit_logs: {
        client: !0,
        default: !0
    },
    origin_commit_email_verification_enabled: {
        client: !0,
        default: !1
    },
    limit_hit_ui_kill_switch: {
        client: !0,
        default: !1
    },
    rate_limited_reconnect_message_kill_switch: {
        client: !0,
        default: !1
    },
    glass_no_x_on_chips: {
        client: !0,
        default: !1
    },
    glass_preview_linear_tickets: {
        client: !0,
        default: !1
    },
    origin_repos: {
        client: !0,
        default: !1
    },
    origin_app_user_confirmation: {
        client: !0,
        default: !1
    },
    origin_app_deletion: {
        client: !0,
        default: !1
    },
    codebase_branches_redesign_in_progress: {
        client: !0,
        default: !1
    },
    automations_origin_request_reviewers: {
        client: !0,
        default: !1
    },
    origin_raw_file_links: {
        client: !0,
        default: !0
    },
    origin_inbox_osp_watch: {
        client: !0,
        default: !1
    },
    sand_auto_review: {
        client: !0,
        default: !0
    },
    sand_auto_review_admin_enforce: {
        client: !0,
        default: !0
    },
    sand_auto_review_admin_rules: {
        client: !0,
        default: !0
    },
    sand_local_egress_admin_control: {
        client: !0,
        default: !0
    },
    allow_disable_sudo_grok_bot: {
        client: !0,
        default: !1
    },
    smart_mode_classifier_shadow_mode: {
        client: !0,
        default: !1
    },
    ext_host_document_memory_estimates: {
        client: !0,
        default: !1
    },
    agent_exec_text_document_api_access_tracking: {
        client: !0,
        default: !1
    },
    cursor_agent_host: {
        client: !0,
        default: !1
    },
    cursor_agent_host_move_exec: {
        client: !0,
        default: !1
    },
    agent_host_own_request_context: {
        client: !0,
        default: !1
    },
    cursor_agent_host_owned_session_storage: {
        client: !0,
        default: !1
    },
    cursor_agent_host_session_storage_migrate_on_open: {
        client: !0,
        default: !1
    },
    cursor_agent_host_native_cloud_subagent: {
        client: !0,
        default: !1
    },
    cursor_agent_host_subagent_interactions: {
        client: !0,
        default: !1
    },
    agent_host_local_loop: {
        client: !0,
        default: !1
    },
    composer_send_prewarm: {
        client: !0,
        default: !1
    },
    glass_local_ollama: {
        client: !0,
        default: !1
    },
    agent_host_updater: {
        client: !0,
        default: !1
    },
    agent_host_private_inference: {
        client: !0,
        default: !1
    },
    defer_cursor_agent_exec_activation: {
        client: !0,
        default: !1
    },
    shell_exec_output_backpressure: {
        client: !0,
        default: !0
    },
    shell_exec_powershell_utf8_console: {
        client: !0,
        default: !1
    },
    file_watcher_metrics: {
        client: !0,
        default: !1
    },
    glass_shared_application_storage: {
        client: !0,
        default: !0
    },
    glass_startup_connect_transport: {
        client: !0,
        default: !1
    },
    reactivestorage_single_pass_stringify: {
        client: !0,
        default: !0
    },
    reactive_storage_size_report_enabled: {
        client: !0,
        default: !1
    },
    model_catalog_own_key: {
        client: !0,
        default: !1
    },
    slow_ipc_deserialize_sentry: {
        client: !0,
        default: !1
    },
    chunked_document_open_sync: {
        client: !0,
        default: !0
    },
    ripgrep_invocation_monitor: {
        client: !0,
        default: !1
    },
    rules_discovery_respect_cursorignore: {
        client: !0,
        default: !1
    },
    subagents_discovery_allow_external_symlinks: {
        client: !0,
        default: !1
    },
    grep_fallback_monitor: {
        client: !0,
        default: !1
    },
    crepe_lazy_external_git_index: {
        client: !0,
        default: !1
    },
    exthost_rpc_channel_history: {
        client: !0,
        default: !1
    },
    exthost_rpc_metrics: {
        client: !0,
        default: !1
    },
    remote_exthost_watchdog: {
        client: !0,
        default: !1
    },
    glass_remote_connection_dormancy: {
        client: !0,
        default: !1
    },
    disable_remote_workspace_reh_healthcheck: {
        client: !0,
        default: !1
    },
    service_account_repo_scope_use_installation_fanout: {
        client: !0,
        default: !1
    },
    cloud_agent_default_environment: {
        client: !0,
        default: !1
    },
    grok_bot_gkw_connectors: {
        client: !0,
        default: !1
    },
    ide_make_github_request_enabled: {
        client: !0,
        default: !1
    },
    customize_hooks_execution_log_detail: {
        client: !0,
        default: !0
    },
    skip_hooks_ready_wait_without_hooks: {
        client: !0,
        default: !1
    },
    dashboard_agent_requests_heatmap: {
        client: !0,
        default: !1
    },
    bugbot_enable_bulk_rules_upload_in_portal: {
        client: !0,
        default: !1
    },
    team_rule_agent_type_ui: {
        client: !0,
        default: !1
    },
    advanced_setup_for_self_hosted_gitlab_available: {
        client: !0,
        default: !1
    },
    gitlab_com_service_account_token_available: {
        client: !0,
        default: !1
    },
    enable_bitbucket_data_center_onboarding: {
        client: !0,
        default: !0
    },
    enable_bitbucket: {
        client: !0,
        default: !0
    },
    internal_team_user_profiles: {
        client: !0,
        default: !0
    },
    user_profile_glass: {
        client: !0,
        default: !0
    },
    automations_chain_prompts: {
        client: !0,
        default: !1
    },
    website_use_new_model_picker_for_automations: {
        client: !0,
        default: !0
    },
    green_dot_automation_status: {
        client: !0,
        default: !0
    },
    automations_validate_on_enable: {
        client: !0,
        default: !0
    },
    automations_retry_button: {
        client: !0,
        default: !1
    },
    managed_automations_team_revamp: {
        client: !0,
        default: !0
    },
    automations_gitlab_extended_triggers: {
        client: !0,
        default: !0
    },
    automations_bitbucket_extended_triggers: {
        client: !0,
        default: !1
    },
    automations_forge_agnostic_mirrors: {
        client: !0,
        default: !1
    },
    managed_agents_enabled: {
        client: !0,
        default: !1
    },
    custom_agents_enabled: {
        client: !0,
        default: !0
    },
    debug_bot_customer_facing_ui: {
        client: !0,
        default: !1
    },
    agents_bugbot_bottom_upsell: {
        client: !0,
        default: !1
    },
    review_agents_shared_growth: {
        client: !0,
        default: !1
    },
    automations_org_scoped_triggers_ui: {
        client: !0,
        default: !1
    },
    cloud_agents_no_repo_enabled: {
        client: !0,
        default: !0
    },
    cloud_agent_resubmit_from_message: {
        client: !0,
        default: !0
    },
    glass_cloud_agent_sidebar_ci_status: {
        client: !0,
        default: !1
    },
    cloud_agent_migration_resume_kickoff: {
        client: !0,
        default: !0
    },
    glass_cloud_agent_fork_from_turn: {
        client: !0,
        default: !0
    },
    cloud_agent_stop_permanent_stream_reconnect: {
        client: !0,
        default: !0
    },
    cloud_agent_repair_stalled_pane: {
        client: !0,
        default: !0
    },
    cloud_agent_plugins: {
        client: !0,
        default: !0
    },
    cloud_agent_origin_env_migration_rpc: {
        client: !0,
        default: !1
    },
    cloud_agent_environment_duplicate: {
        client: !0,
        default: !1
    },
    local_agent_subagent_state_blob_refs: {
        client: !0,
        default: !1
    },
    cloud_agent_env_setup_with_dockerfiles: {
        client: !0,
        default: !1
    },
    generalized_env_setup: {
        client: !0,
        default: !0
    },
    cloud_agent_ask_question_auto_answer: {
        client: !0,
        default: !1
    },
    cloud_agent_ask_question_auto_answer_timeout_setting: {
        client: !0,
        default: !1
    },
    cloud_agent_publish_ui: {
        client: !0,
        default: !1
    },
    grok_bot_publish_confirm_card: {
        client: !0,
        default: !1
    },
    cloud_agent_env_builds_default_enabled: {
        client: !0,
        default: !0
    },
    cloud_agent_migrate_to_builds_setup_agent_cta: {
        client: !0,
        default: !0
    },
    cloud_agent_transcript_reliability_controls: {
        client: !0,
        default: !0
    },
    local_agent_transcript_search_in_glass: {
        client: !0,
        default: !0
    },
    agent_conversation_search_tool: {
        client: !0,
        default: !0
    },
    disable_cloud_agent_transcript_indexing_in_glass: {
        client: !0,
        default: !1
    },
    nal_agent_retries: {
        client: !0,
        default: !0
    },
    cli_harness_telemetry: {
        client: !0,
        default: !1
    },
    cli_image_arg: {
        client: !0,
        default: !1
    },
    "x-chat-context": {
        client: !0,
        default: !1
    },
    referral_codes_v2: {
        client: !0,
        default: !0
    },
    p2p_referrals_v1: {
        client: !0,
        default: !0
    },
    oom_crash_watcher: {
        client: !0,
        default: !1
    },
    local_request_tracing: {
        client: !0,
        default: !1
    },
    local_request_trace_dd_slogs: {
        client: !0,
        default: !1
    },
    memory_pressure_profiling: {
        client: !0,
        default: !0
    },
    cpu_monitor_process_snapshot: {
        client: !0,
        default: !1
    },
    issue_traces_enabled: {
        client: !0,
        default: !0
    },
    glass_automations_ui: {
        client: !0,
        default: !0
    },
    glass_stable_diff_group_keys: {
        client: !0,
        default: !1
    },
    local_automations: {
        client: !0,
        default: !1
    },
    local_automations_nav: {
        client: !0,
        default: !1
    },
    glass_agent_confetti_cannon: {
        client: !0,
        default: !0
    },
    glass_install_plugin_tool_enabled: {
        client: !0,
        default: !0
    },
    cursor_backend_control_automation_mcp: {
        client: !0,
        default: !0
    },
    glass_multi_root_workspace_editing: {
        client: !0,
        default: !1
    },
    glass_search_first_repo_picker: {
        client: !0,
        default: !1
    },
    glass_remote_ssh_workspace_repair: {
        client: !0,
        default: !0
    },
    glass_remote_ssh_management_connection_token_loss_repair: {
        client: !0,
        default: !0
    },
    glass_custom_theme_support: {
        client: !0,
        default: !1
    },
    glass_send_feedback: {
        client: !0,
        default: !1
    },
    glass_project_filled_user_bubble: {
        client: !0,
        default: !1
    },
    environment_param_for_subagent: {
        client: !0,
        default: !1
    },
    glass_assistant_message_selection_feedback: {
        client: !0,
        default: !1
    },
    glass_turn_feedback_menu: {
        client: !0,
        default: !1
    },
    glass_turn_actions_reply: {
        client: !0,
        default: !1
    },
    glass_editor_panel_tab_copy_link: {
        client: !0,
        default: !1
    },
    glass_peaky_file_trees: {
        client: !0,
        default: !1
    },
    glass_markdown_table_expand: {
        client: !0,
        default: !1
    },
    glass_status_bar_environment_picker: {
        client: !0,
        default: !1
    },
    glass_project_agent_tool_rows: {
        client: !0,
        default: !1
    },
    glass_cloud_awaiting_turn_start: {
        client: !0,
        default: !1
    },
    glass_all_changes_diff_scope: {
        client: !0,
        default: !1
    },
    glass_scm_dynamic_base_branch: {
        client: !0,
        default: !1
    },
    glass_direct_github_connect: {
        client: !0,
        default: !1
    },
    scm_connect_in_app_ad: {
        client: !0,
        default: !0
    },
    scm_connect_in_app_ad_gitlab: {
        client: !0,
        default: !0
    },
    scm_connect_ad_cheap_probe: {
        client: !0,
        default: !0
    },
    import_cc_conversation: {
        client: !0,
        default: !0
    },
    import_cc_conversation_default: {
        client: !0,
        default: !1
    },
    glass_drafts_quick_action_pill: {
        client: !0,
        default: !1
    },
    glass_sidebar_source_metadata: {
        client: !0,
        default: !1
    },
    glass_sidebar_scroll_active_row_if_needed: {
        client: !0,
        default: !0
    },
    glass_sidebar_archive_toggle: {
        client: !0,
        default: !1
    },
    glass_sidebar_unified_group_headers: {
        client: !0,
        default: !1
    },
    glass_sidebar_env_icons: {
        client: !0,
        default: !1
    },
    glass_btw_side_question: {
        client: !0,
        default: !1
    },
    glass_side_chats: {
        client: !0,
        default: !0
    },
    cloud_agent_side_chats: {
        client: !0,
        default: !0
    },
    cloud_agent_desktop_lease: {
        client: !0,
        default: !0
    },
    cloud_agent_machine_resources: {
        client: !0,
        default: !1
    },
    cloud_project_coordinator_v2: {
        client: !0,
        default: !0
    },
    glass_project_worker_membership_rpc: {
        client: !0,
        default: !0
    },
    glass_composer_markdown_support: {
        client: !0,
        default: !1
    },
    glass_cloud_child_question_answered_in_child: {
        client: !0,
        default: !1
    },
    glass_cloud_pending_interactions: {
        client: !0,
        default: !1
    },
    prompt_input_image_annotation: {
        client: !0,
        default: !0
    },
    glass_lazy_file_tabs: {
        client: !0,
        default: !0
    },
    glass_temporary_pr_tabs: {
        client: !0,
        default: !1
    },
    glass_projects_enabled: {
        client: !0,
        default: !1
    },
    glass_project_pinning: {
        client: !0,
        default: !1
    },
    glass_enable_main_bot: {
        client: !0,
        default: !1
    },
    glass_main_bot_tasks: {
        client: !0,
        default: !1
    },
    internal_cloud_project_remote_control: {
        client: !0,
        default: !1
    },
    enable_add_local_agent_to_cloud_project: {
        client: !0,
        default: !1
    },
    remote_agent_host_glass: {
        client: !0,
        default: !1
    },
    glass_first_project_onboarding: {
        client: !0,
        default: !0
    },
    dev_only_force_first_project_experience: {
        client: !0,
        default: !1
    },
    staged_project_listing: {
        client: !0,
        default: !1
    },
    staged_project_instant_create: {
        client: !0,
        default: !1
    },
    staged_project_seeding: {
        client: !0,
        default: !1
    },
    glass_project_notes_tldr_card: {
        client: !0,
        default: !0
    },
    glass_project_notes_only_title_context: {
        client: !0,
        default: !1
    },
    glass_project_notes_notion_links: {
        client: !0,
        default: !1
    },
    glass_project_notes_document: {
        client: !0,
        default: !1
    },
    glass_project_notes_manual_status: {
        client: !0,
        default: !1
    },
    glass_project_notes_brief_view: {
        client: !0,
        default: !1
    },
    glass_project_notes_pr_stack_pill: {
        client: !0,
        default: !1
    },
    glass_project_tasks_pill: {
        client: !0,
        default: !1
    },
    glass_project_pinned_tab: {
        client: !0,
        default: !1
    },
    glass_projects_empty_state: {
        client: !0,
        default: !1
    },
    glass_projects_unread_divider: {
        client: !0,
        default: !0
    },
    glass_cloud_agents_unread_divider: {
        client: !0,
        default: !0
    },
    glass_local_agents_unread_divider: {
        client: !0,
        default: !0
    },
    glass_project_style_user_messages: {
        client: !0,
        default: !1
    },
    glass_vercel_connect_pill_cloud: {
        client: !0,
        default: !1
    },
    glass_vercel_connect_pill_local: {
        client: !0,
        default: !1
    },
    web_vercel_publish_pill: {
        client: !0,
        default: !1
    },
    local_interactive_child_inbox: {
        client: !0,
        default: !1
    },
    glass_diff_ci_tab: {
        client: !0,
        default: !0
    },
    managed_review_agent_skills_enabled: {
        client: !0,
        default: !1
    },
    glass_diff_commits_tab: {
        client: !0,
        default: !0
    },
    glass_diff_reviews_tab: {
        client: !0,
        default: !0
    },
    glass_agentic_migration_reconcile: {
        client: !0,
        default: !1
    },
    glass_cloud_to_worktree: {
        client: !0,
        default: !0
    },
    glass_pr_viewed: {
        client: !0,
        default: !0
    },
    glass_pr_realtime_updates: {
        client: !0,
        default: !1
    },
    glass_avoid_secondary_scanline: {
        client: !0,
        default: !1
    },
    skills_cli_install: {
        client: !0,
        default: !1
    },
    glass_design_mode_annotations: {
        client: !0,
        default: !1
    },
    glass_agent_pr_followup_pill: {
        client: !0,
        default: !1
    },
    glass_open_resource_tool_enabled: {
        client: !0,
        default: !0
    },
    glass_pr_tray_stack_groups: {
        client: !0,
        default: !1
    },
    open_github_pr_links_in_review_cursor: {
        client: !0,
        default: !1
    },
    cursor_com_review_pages: {
        client: !0,
        default: !1
    },
    show_cursor_review_early_access_ad: {
        client: !0,
        default: !1
    },
    smart_allowlist_required: {
        client: !0,
        default: !1
    },
    bugbot_low_mode: {
        client: !0,
        default: !0
    },
    bugbot_connect_repo_implicit_enable: {
        client: !0,
        default: !0
    },
    bugbot_onboarding_high_effort_learning_defaults_team_v2: {
        client: !0,
        default: !0
    },
    bugbot_suggested_repos_banner: {
        client: !0,
        default: !0
    },
    bugbot_non_admin_enablement: {
        client: !0,
        default: !0
    },
    use_model_parameters: {
        client: !0,
        default: !0
    },
    use_react_model_picker: {
        client: !0,
        default: !0
    },
    model_picker_max_badge: {
        client: !0,
        default: !1
    },
    model_picker_hover_options: {
        client: !0,
        default: !1
    },
    glass_model_picker_new_menu: {
        client: !0,
        default: !1
    },
    bugbot_auto_spawn_cloud_agent: {
        client: !0,
        default: !0
    },
    bugbot_fail_check_on_findings: {
        client: !0,
        default: !1
    },
    composer_auto_routing_result_display: {
        client: !0,
        default: !0
    },
    seat_upgrade_economics_recommendations: {
        client: !0,
        default: !0
    },
    self_serve_team_tiered_pricing_conversion: {
        client: !0,
        default: !0
    },
    self_serve_team_tiered_pricing_manual_conversion: {
        client: !0,
        default: !0
    },
    self_serve_team_tiered_pricing_new_team_creator: {
        client: !0,
        default: !0
    },
    self_serve_team_tiered_pricing_legacy_conversion: {
        client: !0,
        default: !1
    },
    cursor_models_additional_budget: {
        client: !0,
        default: !1
    },
    composer_enable_bga_hydration_from_snapshot: {
        client: !0,
        default: !0
    },
    fix_remote_ssh_checkpoints: {
        client: !0,
        default: !1
    },
    glass_composer_header_pagination: {
        client: !0,
        default: !1
    },
    glass_realtime_voice: {
        client: !0,
        default: !1
    },
    web_realtime_voice: {
        client: !0,
        default: !1
    },
    mobile_realtime_voice: {
        client: !0,
        default: !1
    },
    glass_realtime_voice_new_agent: {
        client: !0,
        default: !1
    },
    web_realtime_voice_new_agent: {
        client: !0,
        default: !1
    },
    mobile_realtime_voice_new_agent: {
        client: !0,
        default: !1
    },
    cursor_blame: {
        client: !0,
        default: !1
    },
    cursor_skill_enabled: {
        client: !0,
        default: !1
    },
    onboard_skill_enabled: {
        client: !0,
        default: !1
    },
    ai_attribution_tool: {
        client: !0,
        default: !1
    },
    pr_metrics_admin_view_override: {
        client: !0,
        default: !1
    },
    portal_files_engine_ssr_body_prefetch: {
        client: !0,
        default: !1
    },
    portal_files_engine_ssr_tour_prefetch: {
        client: !0,
        default: !1
    },
    portal_files_engine_ssr_browser_still: {
        client: !0,
        default: !1
    },
    portal_files_engine_tour_stored_prefetch: {
        client: !0,
        default: !1
    },
    portal_files_engine_card_virtualization: {
        client: !0,
        default: !1
    },
    portal_files_engine_ssr_stored_tour: {
        client: !0,
        default: !1
    },
    enable_code_tours_custom_prompt: {
        client: !0,
        default: !1
    },
    enable_code_tour_path_scope: {
        client: !0,
        default: !1
    },
    portal_pr_code_tour_stack_generate: {
        client: !0,
        default: !1
    },
    enable_code_tour_section_reviewed: {
        client: !0,
        default: !1
    },
    portal_pr_activity: {
        client: !0,
        default: !1
    },
    agents_origin_pr_tab: {
        client: !0,
        default: !1
    },
    agents_github_pr_tab: {
        client: !0,
        default: !1
    },
    portal_glass_transcript: {
        client: !0,
        default: !1
    },
    portal_hide_projects_sidebar: {
        client: !0,
        default: !0
    },
    enable_ex_hs: {
        client: !0,
        default: !0
    },
    stars_popup_ignore_dont_ask_again: {
        client: !0,
        default: !1
    },
    terminal_execution_service_2: {
        client: !0,
        default: !0
    },
    long_running_jobs: {
        client: !0,
        default: !0
    },
    background_nudge_2: {
        client: !0,
        default: !0
    },
    auto_background_foreground_tools_on_followup: {
        client: !0,
        default: !1
    },
    user_message_timestamps: {
        client: !0,
        default: !0
    },
    cloud_agent_preview_port_forward: {
        client: !0,
        default: !1
    },
    terminal_ui_2: {
        client: !0,
        default: !0
    },
    composer_protected_tooltip: {
        client: !0,
        default: !0
    },
    auto_open_review_during_plan_build: {
        client: !0,
        default: !1
    },
    analyze_query_intent: {
        client: !0,
        default: !1
    },
    allowlist_in_ask_every_time_mode: {
        client: !0,
        default: !1
    },
    analytics_output_channel: {
        client: !0,
        default: !1
    },
    analytics_batch_coalesce_watermark: {
        client: !0,
        default: !0
    },
    browser_features_access_control: {
        client: !0,
        default: !1
    },
    cli_sandbox_default_enable: {
        client: !0,
        default: !1
    },
    cli_auto_run_hint: {
        client: !0,
        default: !0
    },
    "cli.hints": {
        client: !0,
        default: !0
    },
    "cli.rewind": {
        client: !0,
        default: !0
    },
    cli_debug_mode: {
        client: !0,
        default: !0
    },
    cli_btw_side_question: {
        client: !0,
        default: !0
    },
    cli_model_picker: {
        client: !0,
        default: !0
    },
    cli_zen_mode_available: {
        client: !0,
        default: !1
    },
    cli_show_images: {
        client: !0,
        default: !0
    },
    pr_analytics: {
        client: !0,
        default: !1
    },
    xai_team_link: {
        client: !0,
        default: !0
    },
    xai_commerce_webview: {
        client: !0,
        default: !1
    },
    xai_commerce_webview_web_billed_management: {
        client: !0,
        default: !1
    },
    sand_mobile_xai_commerce_webview: {
        client: !0,
        default: !1
    },
    unified_sku_billing_ui: {
        client: !0,
        default: !1
    },
    block_legacy_sku_changes: {
        client: !0,
        default: !1
    },
    auth_unification_ctas_930: {
        client: !0,
        default: !1
    },
    use_unified_service_tokens: {
        client: !0,
        default: !1
    },
    enable_cc_plugin_import: {
        client: !0,
        default: !0
    },
    model_picker_nudge: {
        client: !0,
        default: !1
    },
    cloud_agent_origin_repos: {
        client: !0,
        default: !1
    },
    cloud_agent_new_project_entrypoint: {
        client: !0,
        default: !1
    },
    cloud_agent_new_project_empty_root_commit: {
        client: !0,
        default: !1
    },
    cloud_agent_new_project_jit_no_namespace: {
        client: !0,
        default: !1
    },
    agent_create_repo_tray: {
        client: !0,
        default: !1
    },
    agent_create_repo_tray_cloud_publish: {
        client: !0,
        default: !1
    },
    codebase_browse_ask_cursor: {
        client: !0,
        default: !1
    },
    enable_origin_agentic_repo_board: {
        client: !0,
        default: !1
    },
    enable_origin_repo_insights: {
        client: !0,
        default: !1
    },
    codebase_browse_symbol_nav: {
        client: !0,
        default: !0
    },
    enable_automations_show_all_mirrored_repos: {
        client: !0,
        default: !1
    },
    enable_forge_source_pr_creation_setting: {
        client: !0,
        default: !1
    },
    origin_dogfooding_cursor_creation_provider_override: {
        client: !0,
        default: !1
    },
    bitbucket_protected_git_scopes: {
        client: !0,
        default: !1
    },
    cloud_agent_bitbucket_server_repos: {
        client: !0,
        default: !1
    },
    origin_request_access_disabled: {
        client: !0,
        default: !1
    },
    origin_non_admin_namespace_creation_allowed: {
        client: !0,
        default: !0
    },
    origin_enable_org_member_direct_grants: {
        client: !0,
        default: !0
    },
    enable_origin_external_collaborators: {
        client: !0,
        default: !0
    },
    origin_repo_collaborators_tab: {
        client: !0,
        default: !0
    },
    enable_origin_external_sharing: {
        client: !0,
        default: !0
    },
    enable_clonekit_in_app: {
        client: !0,
        default: !1
    },
    origin_mcp: {
        client: !0,
        default: !1,
        requiresAuthenticatedBootstrap: !0
    },
    enable_origin_research_preview_for_enterprises: {
        client: !0,
        default: !0
    },
    marketplace_origin_distribution: {
        client: !0,
        default: !0
    },
    atlas_enabled: {
        client: !0,
        default: !1
    },
    mcp_oauth_hosted_loopback_callback: {
        client: !0,
        default: !1
    },
    mcp_multi_account: {
        client: !0,
        default: !0
    },
    sharepoint_team_connector: {
        client: !0,
        default: !1
    },
    cloud_agent_interactive_mcp_auth: {
        client: !0,
        default: !0
    },
    mcp_profile_scoped_global_disabled_state: {
        client: !0,
        default: !0
    },
    team_mcps_in_cli: {
        client: !0,
        default: !1
    },
    remote_permissions_file_path_admin: {
        client: !0,
        default: !1
    },
    admin_command_denylist: {
        client: !0,
        default: !1
    },
    admin_reset_agent_run_mode_to_auto_review: {
        client: !0,
        default: !1
    },
    admin_command_denylist_enforcement_killswitch: {
        client: !0,
        default: !1
    },
    restrict_team_member_invite_button: {
        client: !0,
        default: !1
    },
    bugbot_autorun_killswitch: {
        client: !0,
        default: !1
    },
    keybinding_migration_killswitch: {
        client: !0,
        default: !1
    },
    agent_review_fake_dev: {
        client: !0,
        default: !1
    },
    enable_moved_lines_treatment: {
        client: !0,
        default: !1
    },
    ide_cmd_enter_submit: {
        client: !0,
        default: !0
    },
    ide_nal_migration: {
        client: !0,
        default: !1
    },
    ide_new_sidebar: {
        client: !0,
        default: !1
    },
    playwright_mcp_provider: {
        client: !0,
        default: !0
    },
    web_audit_events: {
        client: !0,
        default: !1
    },
    web_cloud_agent_followup_model_picker: {
        client: !0,
        default: !0
    },
    web_cloud_agent_new_model_picker: {
        client: !0,
        default: !1
    },
    web_cloud_agent_kickoff_lands_in_run_view: {
        client: !0,
        default: !0
    },
    web_cloud_agent_external_source_attachment: {
        client: !0,
        default: !0
    },
    enable_new_cloud_onboarding_ui_changes: {
        client: !0,
        default: !1
    },
    cloud_agent_portal_ask_question: {
        client: !0,
        default: !1
    },
    cloud_agent_portal_pending_interactions: {
        client: !0,
        default: !1
    },
    "web.show_local_source_filter": {
        client: !0,
        default: !1
    },
    open_agent_window_bottom_convo: {
        client: !0,
        default: !1
    },
    open_agent_window_top: {
        client: !0,
        default: !0
    },
    "glass.enable_open_agent_in_window": {
        client: !0,
        default: !1
    },
    cloud_agent_best_of_n_disabled: {
        client: !0,
        default: !1
    },
    cloud_agent_prompt_upload_presign: {
        client: !0,
        default: !0
    },
    search_telemetry: {
        client: !0,
        default: !1
    },
    scim_require_user_directory_ui: {
        client: !0,
        default: !1
    },
    allow_legacy_billing_group_creation: {
        client: !0,
        default: !1
    },
    new_file_ux: {
        client: !0,
        default: !0
    },
    internal_browser_evaluate: {
        client: !0,
        default: !1
    },
    browser_canvas: {
        client: !0,
        default: !0
    },
    cloud_canvas_skill: {
        client: !0,
        default: !1
    },
    cloud_canvas_tools: {
        client: !0,
        default: !1
    },
    composer_separate_shell_activity_groups: {
        client: !0,
        default: !1
    },
    show_grouped_edit_diff_stats: {
        client: !0,
        default: !1
    },
    composer_end_of_turn_summary: {
        client: !0,
        default: !1
    },
    allowlist_toggle_menu: {
        client: !0,
        default: !0
    },
    slim_codeblock_render: {
        client: !0,
        default: !0
    },
    compact_terminal: {
        client: !0,
        default: !0
    },
    "cursor-ios-disable-legacy-plans-iap": {
        client: !0,
        default: !1
    },
    sand_legacy_iap_sales_cutoff: {
        client: !0,
        default: !1
    },
    sand_android_iap_enabled: {
        client: !0,
        default: !0
    },
    sand_android_purchase_token_backfill: {
        client: !0,
        default: !1
    },
    composer_sandbox_settings_visible: {
        client: !0,
        default: !0
    },
    sandbox_force_disable_win32: {
        client: !0,
        default: !0
    },
    admin_network_controls: {
        client: !0,
        default: !0
    },
    mcp_access_network_allowlist: {
        client: !0,
        default: !1
    },
    mcp_admin_only_servers: {
        client: !0,
        default: !1
    },
    mcp_admin_only_tools: {
        client: !0,
        default: !1
    },
    sandbox_mcp_servers: {
        client: !0,
        default: !1
    },
    sandbox_read_control_portal: {
        client: !0,
        default: !1
    },
    sandbox_read_control_portal_ui: {
        client: !0,
        default: !1
    },
    mcp_network_allowlist: {
        client: !0,
        default: !1
    },
    mcp_settings_overhaul: {
        client: !0,
        default: !0
    },
    mcp_settings_overhaul_portal: {
        client: !0,
        default: !0
    },
    mcp_allowlist_import_export: {
        client: !0,
        default: !1
    },
    mcp_user_extension_stdio_unsandboxed_win32: {
        client: !0,
        default: !1
    },
    mcp_tool_allowlist_modes: {
        client: !0,
        default: !0
    },
    cloud_agent_environment_mcp_allowlist_ui: {
        client: !0,
        default: !1
    },
    cloud_agent_keyring_ui: {
        client: !0,
        default: !1
    },
    cursor_rules_batch_update: {
        client: !0,
        default: !0
    },
    agent_skills_batch_update: {
        client: !0,
        default: !0
    },
    mcp_structured_logging: {
        client: !0,
        default: !1
    },
    mcp_runtime_dedupe: {
        client: !0,
        default: !1
    },
    dedupe_mcp_servers: {
        client: !0,
        default: !0
    },
    mcp_oauth_unsafe_redirect_logging: {
        client: !0,
        default: !1
    },
    proper_well_known_for_mcp_scopes: {
        client: !0,
        default: !0
    },
    context_usage_canvas: {
        client: !0,
        default: !1
    },
    local_computer_use: {
        client: !0,
        default: !1
    },
    mac_computer_use: {
        client: !0,
        default: !1
    },
    windows_computer_use_batch: {
        client: !0,
        default: !1
    },
    computer_use_next_action: {
        client: !0,
        default: !1
    },
    playwright_autorun: {
        client: !0,
        default: !0
    },
    allow_download_prompts: {
        client: !0,
        default: !1
    },
    agent_context_injection: {
        client: !0,
        default: !0
    },
    project_agent_team_store: {
        client: !0,
        default: !1
    },
    project_followups_use_steering: {
        client: !0,
        default: !1
    },
    clone_blob_upload: {
        client: !0,
        default: !0
    },
    internal_session_recording_status_bar: {
        client: !0,
        default: !1
    },
    agent_video_signed_url_uploads: {
        client: !0,
        default: !1
    },
    nal_task_tool: {
        client: !0,
        default: !0
    },
    explore_subagent: {
        client: !0,
        default: !0
    },
    enable_watch_video_in_ide: {
        client: !0,
        default: !0
    },
    shell_subagent: {
        client: !0,
        default: !0
    },
    enable_build_with_swarm: {
        client: !0,
        default: !1
    },
    explicit_subagent_models: {
        client: !0,
        default: !1
    },
    nal_trace: {
        client: !0,
        default: !1
    },
    ask_question_all_modes: {
        client: !0,
        default: !0
    },
    disable_terminal_output_ui_streaming: {
        client: !0,
        default: !1
    },
    generate_user_instructions: {
        client: !0,
        default: !1
    },
    ide_nal_rdv: {
        client: !0,
        default: !1
    },
    use_nlb_for_nal: {
        client: !0,
        default: !0
    },
    "use-usw1-agent-for-nal": {
        client: !0,
        default: !1
    },
    retry_interceptor_disabled: {
        client: !0,
        default: !1
    },
    retry_interceptor_enabled_for_streaming: {
        client: !0,
        default: !0
    },
    bidi_append_fix: {
        client: !0,
        default: !0
    },
    http1_keepalive_disabled: {
        client: !0,
        default: !1
    },
    ws_reachability_probe: {
        client: !0,
        default: !0
    },
    ws_dark_durability_probe: {
        client: !0,
        default: !1
    },
    large_proto_logging_enabled: {
        client: !0,
        default: !1
    },
    submitlogs_flush_throttle: {
        client: !0,
        default: !0
    },
    background_composer_list_focus_aware_poll: {
        client: !0,
        default: !0
    },
    agent_slack_bot_member_install: {
        client: !0,
        default: !1
    },
    enterprise_early_access: {
        client: !0,
        default: !1
    },
    use_byok_allowlist: {
        client: !0,
        default: !0
    },
    show_dogfood_release_track: {
        client: !0,
        default: !1
    },
    client_numeric_metrics: {
        client: !0,
        default: !0
    },
    client_outage_banners: {
        client: !0,
        default: !1
    },
    solidjs_total_observers_metric: {
        client: !0,
        default: !1
    },
    renderer_heap_metrics: {
        client: !0,
        default: !1
    },
    glass_react_commit_churn: {
        client: !0,
        default: !1
    },
    sand_renderer_heap_metrics: {
        client: !0,
        default: !1
    },
    sand_desktop_notification_permission: {
        client: !0,
        default: !1
    },
    sand_desktop_notification_permission_persist: {
        client: !0,
        default: !1
    },
    sand_mobile_notification_permission_persist: {
        client: !0,
        default: !1
    },
    collect_sample_for_unresponsive_ext_host: {
        client: !0,
        default: !1
    },
    unresponsive_ext_host_enhanced_attachments: {
        client: !0,
        default: !1
    },
    worktree_nal_only: {
        client: !0,
        default: !0
    },
    glass_precompute_diff_tokenization: {
        client: !0,
        default: !1
    },
    review_changes_fast_multi_diff: {
        client: !0,
        default: !1
    },
    cpp_perf_instrumentation: {
        client: !0,
        default: !0
    },
    migrate_editor_mode: {
        client: !0,
        default: !0
    },
    show_dev_only_ttft_warning: {
        client: !0,
        default: !1
    },
    glass_local_review_first_bugbot_cta: {
        client: !0,
        default: !0
    },
    editor_review_cta_uses_review_bugbot: {
        client: !0,
        default: !1
    },
    local_commit_reflog_signal_killswitch: {
        client: !0,
        default: !1
    },
    gitlab_progressive_repo_load_v1: {
        client: !0,
        default: !1
    },
    repo_picker_server_side_search_v1: {
        client: !0,
        default: !1
    },
    azure_devops_progressive_repo_load_v1: {
        client: !0,
        default: !0
    },
    bugbot_azure_devops_settings: {
        client: !0,
        default: !0
    },
    meta_mcp_tool: {
        client: !0,
        default: !1
    },
    mcp_input_schema_json: {
        client: !0,
        default: !0
    },
    ai_connect_stream_encode_yield: {
        client: !0,
        default: !1
    },
    ai_connect_stream_decode_yield: {
        client: !0,
        default: !1
    },
    mcp_meta_tool_slim_descriptors: {
        client: !0,
        default: !0
    },
    local_agent_event_subscriptions: {
        client: !0,
        default: !0
    },
    web_cloud_agent_conversation_quick_access_rail: {
        client: !0,
        default: !1
    },
    mcp_always_expose_auth_tool: {
        client: !0,
        default: !1
    },
    glass_mcp_app_focus_on_type_guard: {
        client: !0,
        default: !0
    },
    shared_chats: {
        client: !0,
        default: !1
    },
    shared_canvases: {
        client: !0,
        default: !0
    },
    share_transcripts_include_plan: {
        client: !0,
        default: !1
    },
    shared_transcripts_bulk_download: {
        client: !0,
        default: !1
    },
    use_ide_browser_script: {
        client: !0,
        default: !1
    },
    expose_babysit_pr_cloud_entrypoint: {
        client: !0,
        default: !1
    },
    expose_branch_mismatch_continue_in_cloud_entrypoint: {
        client: !0,
        default: !1
    },
    expose_plan_build_in_cloud_entrypoint: {
        client: !0,
        default: !1
    },
    new_plan_editor: {
        client: !0,
        default: !0
    },
    ai_code_tracking_format_detection: {
        client: !0,
        default: !0
    },
    ai_code_tracking_assume_all_commits_ai: {
        client: !0,
        default: !1
    },
    ai_code_tracking_use_commit_timestamp_for_tracking_start: {
        client: !0,
        default: !1
    },
    ai_code_tracking_git_operations_binding_fix: {
        client: !0,
        default: !1
    },
    cloud_agent_slack_default_worker: {
        client: !0,
        default: !1
    },
    grok_bot_contextual_banner_killswitch: {
        client: !0,
        default: !1
    },
    enable_cloud_agent_timings: {
        client: !0,
        default: !1
    },
    subagent_support_interrupt: {
        client: !0,
        default: !0
    },
    web_cloud_agent_no_repo_entrypoint: {
        client: !0,
        default: !1
    },
    agent_store_dashboard: {
        client: !0,
        default: !1
    },
    agent_store_undelete: {
        client: !0,
        default: !1
    },
    cloud_agent_bc_id_attachment: {
        client: !0,
        default: !1
    },
    cloud_persistent_terminals: {
        client: !0,
        default: !0
    },
    cloud_glass_shared_sessions: {
        client: !0,
        default: !1
    },
    shared_terminal_env_setup: {
        client: !0,
        default: !1
    },
    instant_grep_indexing: {
        client: !0,
        default: !1
    },
    cli_instant_grep_indexing: {
        client: !0,
        default: !1
    },
    cli_grove_grep: {
        client: !0,
        default: !1
    },
    push_git_tracked_state_exp: {
        client: !0,
        default: !0
    },
    instant_grep_user_search: {
        client: !0,
        default: !1
    },
    parallel_agent_workflow: {
        client: !0,
        default: !1
    },
    enable_multitask_mode: {
        client: !0,
        default: !0
    },
    glass_subagent_followups: {
        client: !0,
        default: !1
    },
    glass_custom_modes: {
        client: !0,
        default: !1
    },
    cloud_custom_modes: {
        client: !0,
        default: !1
    },
    hide_async_subagent_task_notifications: {
        client: !0,
        default: !0
    },
    cloud_agent_message_sender_attribution: {
        client: !0,
        default: !0
    },
    enable_await_for_subagents: {
        client: !0,
        default: !1
    },
    fix_claude_subagent_await: {
        client: !0,
        default: !0
    },
    fix_grok_subagent_await: {
        client: !0,
        default: !0
    },
    public_leaderboard_web: {
        client: !0,
        default: !1
    },
    enable_cloud_agent_repo_selector: {
        client: !0,
        default: !1
    },
    route_ent_trial_to_model: {
        client: !0,
        default: !1
    },
    debug_mode_autorun_support_enabled: {
        client: !0,
        default: !1
    },
    analytics_conversation_classification: {
        client: !0,
        default: !1
    },
    use_cursor_github_app_id: {
        client: !0,
        default: !0
    },
    push_local_agent_to_cloud: {
        client: !0,
        default: !1
    },
    send_to_cloud_on_followup: {
        client: !0,
        default: !1
    },
    midturn_move_to_cloud_ads: {
        client: !0,
        default: !1
    },
    cloud_agent_checkout_convert_to_local: {
        client: !0,
        default: !1
    },
    show_browser_popup: {
        client: !0,
        default: !1
    },
    agent_layout_show_diffs_quick_settings: {
        client: !0,
        default: !1
    },
    skip_git_telemetry_computations: {
        client: !0,
        default: !1
    },
    composer_background_throttling_remote_only: {
        client: !0,
        default: !1
    },
    composer_gc_handles: {
        client: !0,
        default: !0
    },
    composer_header_log_storage: {
        client: !0,
        default: !1
    },
    composer_retention_structural_byte_metrics: {
        client: !0,
        default: !1
    },
    tokenize_stream_code_blocks: {
        client: !0,
        default: !0
    },
    glass_transcript_code_token_cache: {
        client: !0,
        default: !1
    },
    composer_react_transcript_working_indicator: {
        client: !0,
        default: !1
    },
    composer_transcript_steer_float_up: {
        client: !0,
        default: !1
    },
    inline_visualizations: {
        client: !0,
        default: !1
    },
    inline_visualization_png_export: {
        client: !0,
        default: !1
    },
    diff_tab_viewport_virtualization: {
        client: !0,
        default: !1
    },
    allow_shared_private_worker_assignment: {
        client: !0,
        default: !0
    },
    private_workers_label_filtering: {
        client: !0,
        default: !1
    },
    skip_github_app_for_private_worker: {
        client: !0,
        default: !1
    },
    update_use_localhost: {
        client: !0,
        default: !1
    },
    hide_inline_changed_files: {
        client: !0,
        default: !1
    },
    wysiwyg_markdown_default: {
        client: !0,
        default: !1
    },
    markdown_embedded_project_databases: {
        client: !0,
        default: !1
    },
    skill_icon_color: {
        client: !0,
        default: !1
    },
    skill_catalog_ide_cache: {
        client: !0,
        default: !1
    },
    opt_devs_into_experimental_model_toggle: {
        client: !0,
        default: !1
    },
    default_on_chat_editors: {
        client: !0,
        default: !1
    },
    default_tsgo_internal: {
        client: !0,
        default: !1
    },
    desktop_bridge: {
        client: !0,
        default: !1
    },
    disable_no_title_bar: {
        client: !0,
        default: !1
    },
    show_debug_aux_pane_border: {
        client: !0,
        default: !1
    },
    glass_typography_refresh: {
        client: !0,
        default: !0
    },
    browser_subagent: {
        client: !0,
        default: !0
    },
    browser_subagent_gating: {
        client: !0,
        default: !1
    },
    browser_cpp_telemetry: {
        client: !0,
        default: !0
    },
    network_access_control: {
        client: !0,
        default: !0
    },
    git_snapshot_indexing: {
        client: !0,
        default: !0
    },
    cpp_telem_chunking: {
        client: !0,
        default: !0
    },
    marketplaces_enabled: {
        client: !0,
        default: !0
    },
    customize_page: {
        client: !0,
        default: !1
    },
    customize_page_leaderboard_enabled: {
        client: !0,
        default: !1
    },
    customize_manage_scope_multiselect: {
        client: !0,
        default: !0
    },
    customize_global_search: {
        client: !0,
        default: !0
    },
    customize_plugin_detail_mcp_management: {
        client: !0,
        default: !1
    },
    web_agent_pilled_page: {
        client: !0,
        default: !1
    },
    team_marketplace_mcps: {
        client: !0,
        default: !0
    },
    publish_user_skills: {
        client: !0,
        default: !0
    },
    private_skills_user_store: {
        client: !0,
        default: !1
    },
    plugin_aware_mcp_edit_modal: {
        client: !0,
        default: !0
    },
    dashboard_plugin_add_modal: {
        client: !0,
        default: !1
    },
    dashboard_unified_plugin_mcp_allowlist: {
        client: !0,
        default: !1
    },
    plugin_marketplace_allowlisted_publisher: {
        client: !0,
        default: !1
    },
    prompt_suggestion: {
        client: !0,
        default: !1
    },
    extension_signature_verification: {
        client: !0,
        default: !1
    },
    extension_gallery_query_chunking: {
        client: !0,
        default: !1
    },
    subagents_client_side_vscode: {
        client: !0,
        default: !0
    },
    glass_projects_allowed_machines_footer: {
        client: !0,
        default: !1
    },
    glass_projects_restart_offline_workers: {
        client: !0,
        default: !1
    },
    mcp_coalesce_metrics_sampling: {
        client: !0,
        default: !1
    },
    mcp_shared_process_transports: {
        client: !0,
        default: !1
    },
    sand_box_egress_tunnel: {
        client: !0,
        default: !0
    },
    task_card_tips_enabled: {
        client: !0,
        default: !1
    },
    codebase_telemetry_v2: {
        client: !0,
        default: !0
    },
    codebase_telemetry_v2_git_history: {
        client: !0,
        default: !0
    },
    codebase_telemetry_v2_agent_dot_dirs: {
        client: !0,
        default: !0
    },
    codebase_protection_client_enforcement: {
        client: !0,
        default: !1
    },
    codebase_protection_reporting: {
        client: !0,
        default: !1
    },
    codebase_telemetry_v1_deprecation: {
        client: !0,
        default: !0
    },
    sand_codebase_telemetry: {
        client: !0,
        default: !0
    },
    sand_orbit: {
        client: !0,
        default: !1,
        requiresAuthenticatedBootstrap: !0
    },
    disable_codebase_indexing: {
        client: !0,
        default: !0
    },
    disable_docs_client_usage: {
        client: !0,
        default: !0
    },
    import_3p_plugins: {
        client: !0,
        default: !0
    },
    enable_local_3p_plugin_imports: {
        client: !0,
        default: !0
    },
    enable_new_team_member_usage_boost: {
        client: !0,
        default: !0
    },
    disable_push_request_context: {
        client: !0,
        default: !1
    },
    composer_parallel_stream_setup: {
        client: !0,
        default: !1
    },
    composer_defer_submit_transcript_render: {
        client: !0,
        default: !1
    },
    bugbot_merged_pr_scan: {
        client: !0,
        default: !0
    },
    windows_linux_update_auth_headers: {
        client: !0,
        default: !1
    },
    updater_recovery_windows: {
        client: !0,
        default: !0
    },
    glass_focus_outline: {
        client: !0,
        default: !1
    },
    glass_inline_assistant_turn_actions_bar: {
        client: !0,
        default: !0
    },
    inline_diff_defer_hidden_diff_state: {
        client: !0,
        default: !1
    },
    park_inline_diffs: {
        client: !0,
        default: !1
    },
    enable_marketplace_plugin_logging: {
        client: !0,
        default: !0
    },
    enable_sparse_plugin_clones: {
        client: !0,
        default: !0
    },
    glass_always_local_agent_workspace: {
        client: !0,
        default: !0
    },
    glass_disable_eager_indexing_for_local_sessions: {
        client: !0,
        default: !0
    },
    glass_rainbow_csv_extension: {
        client: !0,
        default: !1
    },
    retry_hydration_optimization: {
        client: !0,
        default: !1
    },
    full_self_driving: {
        client: !0,
        default: !1
    },
    full_self_driving_github_origin_review: {
        client: !0,
        default: !1
    },
    fsd_suggestions_platform_local_mcp: {
        client: !0,
        default: !1
    },
    full_self_driving_glass: {
        client: !0,
        default: !1
    },
    full_self_driving_glass_pr_tab: {
        client: !0,
        default: !1
    },
    shutdown_hang_watchdog_darwin_sigkill: {
        client: !0,
        default: !0
    },
    cursor_shared_session_file_watcher: {
        client: !0,
        default: !1
    },
    cursor_update_supervisor: {
        client: !0,
        default: !1
    },
    cursor_update_shipit_cache_reset_kill_switch: {
        client: !0,
        default: !1
    },
    cursor_private_inference_download_prompt: {
        client: !0,
        default: !1
    },
    cursor_cli_private_inference_download_prompt: {
        client: !0,
        default: !1
    },
    disable_sqlite_storage_backup: {
        client: !0,
        default: !0
    },
    sqlite_incremental_auto_vacuum_on_close: {
        client: !0,
        default: !1
    },
    agent_store_sync_client: {
        client: !0,
        default: !1
    },
    agent_store_use_dedicated_service: {
        client: !0,
        default: !1
    },
    agent_store_citation_index_tier: {
        client: !0,
        default: !1
    },
    agent_store_principal_local_mounts: {
        client: !0,
        default: !1
    },
    agent_store_local_user_mount: {
        client: !0,
        default: !0
    },
    proxy_agent_secure_context_cache: {
        client: !0,
        default: !1
    },
    auto_disable_unused_models: {
        client: !0,
        default: !1
    },
    drop_custom_prompt_context: {
        client: !0,
        default: !1
    },
    composer_reuse_editor_input: {
        client: !0,
        default: !0
    },
    disposable_leak_reporting: {
        client: !0,
        default: !1
    }
}, C_t = Object.keys(gAe), KOe = {
    composer_gc_safety_net_1s: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    tsgo_disable_auto_imports_internal: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    grok_bot_send_to_user_reminder_delegation: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    grok_bot_task_subagent_roster: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    grok_bot_update_state_split_v2: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    sand_hide_at_mentions_ab: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    sand_onboarding_job_role: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    sand_local_egress_default_on_ab: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    sand_mobile_onboarding_job_role_optional: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    sand_mobile_notifications_ask_redesign: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    sand_onboarding_role_use_case_bots: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    limit_hit_ui_2026_06: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "treatment"
            ])
        }
    },
    limit_hit_ui_2027_07: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "treatment"
            ])
        }
    },
    third_party_usage_nudge_2026_07: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "treatment"
            ])
        }
    },
    third_party_usage_nudge_policy_2026_07: {
        client: !0,
        fallbackValues: {
            policy: "none"
        },
        parseValue: {
            policy: xS([
                "none",
                "90",
                "75_90"
            ])
        }
    },
    sand_usage_warning_policy_2026_08: {
        client: !0,
        fallbackValues: {
            policy: "none",
            firstThresholdPercent: 75,
            secondThresholdPercent: 90
        },
        parseValue: {
            policy: xS([
                "none",
                "single",
                "double"
            ]),
            firstThresholdPercent: Bhn,
            secondThresholdPercent: Bhn
        }
    },
    sand_group_chat_discouragement_2026_09: {
        client: !0,
        fallbackValues: {
            policy: "control"
        },
        parseValue: {
            policy: xS([
                "control",
                "notice",
                "notice_and_hide_create"
            ])
        }
    },
    sand_invite_teammates_placement_2026_09: {
        client: !0,
        fallbackValues: {
            placement: "control"
        },
        parseValue: {
            placement: xS([
                "control",
                "profile_menu",
                "settings"
            ])
        }
    },
    third_party_on_demand_nudge_2026_08: {
        client: !0,
        fallbackValues: {
            group: "control",
            copy: "cursor_models"
        },
        parseValue: {
            group: xS([
                "control",
                "treatment"
            ]),
            copy: xS([
                "cursor_models",
                "grok_45"
            ])
        }
    },
    new_chat_first_party_switch_2026_08: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "treatment"
            ])
        }
    },
    grok_45_app_open_recent_composers_2026_08: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    automations_button_in_ide: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    grok_bot_contextual_banner: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            cooldown_days: 1,
            max_shows: 5
        },
        parseValue: {
            enabled: Xb,
            cooldown_days: Bhn,
            max_shows: Bhn
        }
    },
    grok_bot_contextual_banner_v2: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    parallel_agents_try_cloud_nudge_glass: {
        client: !0,
        fallbackValues: {
            variant: "control"
        },
        parseValue: {
            variant: xS([
                "control",
                "try_cloud",
                "educational"
            ])
        }
    },
    dashboard_user_checklist_enterprise: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    dashboard_admin_setup_enterprise: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    dashboard_team_admin_onboarding_checklist: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    new_team_add_teammates_callout: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "callout"
            ])
        }
    },
    new_team_name_prefill: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "domain_brand"
            ])
        }
    },
    dashboard_member_remove_modal: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "treatment_info",
                "treatment_warning"
            ])
        }
    },
    push_mcps: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "enabled"
            ])
        }
    },
    glass_setup_cloud_pill: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            variant: "ghost"
        },
        parseValue: {
            enabled: Xb,
            variant: xS([
                "ghost",
                "primary"
            ])
        }
    },
    send_to_cloud_composer_glass: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    connect_repo_env_setup_pill_glass: {
        client: !0,
        fallbackValues: {
            variant: "control"
        },
        parseValue: {
            variant: xS([
                "control",
                "primary",
                "secondary",
                "tertiary"
            ])
        }
    },
    ide_connect_git_repos_start: {
        client: !0,
        fallbackValues: {
            variant: "control"
        },
        parseValue: {
            variant: xS([
                "control",
                "primary",
                "secondary",
                "tertiary"
            ])
        }
    },
    ide_steer_from_cloud_start: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    glass_account_menu_ios_download: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    glass_account_menu_grok_bot: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    glass_account_menu_usage_remaining: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    glass_agent_demos_setup_pill: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            variant: "ghost",
            cloud_target_only: !1
        },
        parseValue: {
            enabled: Xb,
            variant: xS([
                "ghost",
                "primary"
            ]),
            cloud_target_only: Xb
        }
    },
    cloud_setup_cta_glass_running_agent_session: {
        client: !0,
        fallbackValues: {
            variant: "control"
        },
        parseValue: {
            variant: xS([
                "control",
                "chat_title",
                "composer_pill"
            ])
        }
    },
    set_up_env_pill_glass: {
        client: !0,
        fallbackValues: {
            variant: "control"
        },
        parseValue: {
            variant: xS([
                "control",
                "primary",
                "secondary",
                "tertiary"
            ])
        }
    },
    agent_desktop_glass_env_setup: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    glass_automations_sidebar_new_tag: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    glass_grok_bot_topbar_cta: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    glass_grok_bot_topbar_cta_new_chat_only: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    glass_grok_bot_topbar_cta_hide_when_installed: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    new_tag_cloud_runtime_glass: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    runtime_picker_discovery_nudge_glass: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    remote_control_runtime_picker_glass: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    default_web_users_cloud_in_glass: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    cloud_setup_cta_web_running_agent_session: {
        client: !0,
        fallbackValues: {
            variant: "control"
        },
        parseValue: {
            variant: xS([
                "control",
                "primary",
                "secondary",
                "tertiary"
            ])
        }
    },
    suggested_prompts: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    suggested_mode_switch: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "nudge"
            ])
        }
    },
    marketplace_tab_customize_label: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "treatment"
            ])
        }
    },
    customize_default_manage_tab: {
        client: !0,
        fallbackValues: {
            tab: "plugins"
        },
        parseValue: {
            tab: xS([
                "plugins",
                "mcps"
            ])
        }
    },
    customize_grok_bot_callout: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    marketplace_card_install_cta_ab: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "card_cta"
            ])
        }
    },
    marketplace_detail_authenticate_cta_ab: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "detail_auth_cta"
            ])
        }
    },
    marketplace_try_in_chat_prompt_ab: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "concrete_use_case_prompt"
            ])
        }
    },
    composer_run_button_style: {
        client: !0,
        fallbackValues: {
            buttonStyle: "primary"
        },
        parseValue: {
            buttonStyle: xS([
                "primary",
                "secondary"
            ])
        }
    },
    new_placeholder: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    cursor_launch_at_login: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    subscription_only_degraded_extended_usage: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    onboarding_default_layout_agent: {
        client: !0,
        fallbackValues: {
            enabled: "false"
        },
        parseValue: {
            enabled: o_r
        }
    },
    onboarding_left_right_chat: {
        client: !0,
        fallbackValues: {
            enabled: "left"
        },
        parseValue: {
            enabled: xS([
                "left",
                "right"
            ])
        }
    },
    separate_auto_and_api_usage_bars_for_individuals: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "test"
            ])
        }
    },
    onboarding_skip_post_login: {
        client: !0,
        fallbackValues: {
            enabled: "control"
        },
        parseValue: {
            enabled: xS([
                "control",
                "remove_features"
            ])
        }
    },
    free_user_locked_model_2026_05: {
        client: !0,
        fallbackValues: {
            variant: "control"
        },
        parseValue: {
            variant: xS([
                "control",
                "composer_2_5_fast",
                "composer_2_5",
                "grok_4_6"
            ])
        }
    },
    free_user_composer_grok_picker_2026_07: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "treatment"
            ])
        }
    },
    model_picker_promote_first_party_v3: {
        client: !0,
        fallbackValues: {
            variant: "control"
        },
        parseValue: {
            variant: xS([
                "control",
                "grouped_auto_expand"
            ])
        }
    },
    model_picker_usage_display_2026_08: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "show_labels"
            ])
        }
    },
    free_user_usage_summary_display_mode: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "always_show_percentage"
            ])
        }
    },
    pro_auto_mode_new_users: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "pro_and_auto_default_auto",
                "pro_and_auto_default_pro"
            ])
        }
    },
    pro_auto_mode_existing_users: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "pro_and_auto_default_auto_with_nudge"
            ])
        }
    },
    premium_auto_mode: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "premium_auto_option"
            ])
        }
    },
    terminal_tip: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            message: "Install Cursor CLI?",
            action: "curl https://cursor.com/install -fsS | bash",
            show_every_hours: 0,
            show_count: 0
        },
        parseValue: {
            enabled: Xb,
            message: o_r,
            action: o_r,
            show_every_hours: Bhn,
            show_count: Bhn
        }
    },
    cli_install_ad: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    new_chat_auto_switch: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "popup",
                "inline_banner"
            ])
        }
    },
    team_pending_cancellation_cancel_now: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    yearly_upgrade_inplace: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    portal_od_enable_limit_hit_2026_08: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "treatment"
            ])
        }
    },
    dashboard_user_menu_view_plans: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    dashboard_create_team_sidebar_cta: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    sidebar_bottom_section_cta: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "create_team",
                "upgrade_to_pro"
            ])
        }
    },
    sidebar_grok_bot_cta: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    agents_grok_bot_cta: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    spending_grok_bot_cta: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    free_user_create_team_cta: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    dashboard_free_overview_cleanup: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "used_percentage",
                "remaining_percentage"
            ])
        }
    },
    download_bottom_dashboard: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    web_grok_bot_launch_ad: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    web_cloud_agents_agent_window_ad: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    router_settings_disabled_info: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    onboarding_redirect_git_to_login_deep_control: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    dashboard_invite_modal_version: {
        client: !0,
        fallbackValues: {
            variant: "v2"
        },
        parseValue: {
            variant: xS([
                "v2",
                "v3",
                "v3-contacts"
            ])
        }
    },
    set_up_env_pill_web: {
        client: !0,
        fallbackValues: {
            variant: "control"
        },
        parseValue: {
            variant: xS([
                "control",
                "primary",
                "secondary",
                "tertiary"
            ])
        }
    },
    completely_free_env_setup_glass_and_web: {
        client: !0,
        fallbackValues: {
            variant: "control"
        },
        parseValue: {
            variant: xS([
                "control",
                "primary",
                "secondary",
                "tertiary"
            ])
        }
    },
    env_setup_free_callout_web: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    completely_free_env_setup_glass: {
        client: !0,
        fallbackValues: {
            variant: "control"
        },
        parseValue: {
            variant: xS([
                "control",
                "treatment"
            ])
        }
    },
    dynamic_automation_templates: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "treatment"
            ])
        }
    },
    team_pinned_marketplace_plugins: {
        client: !0,
        fallbackValues: {
            group: "control"
        },
        parseValue: {
            group: xS([
                "control",
                "treatment"
            ])
        }
    },
    glass_new_chat_header: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    glass_ftux_wizard: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    glass_ftux_app_scan: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    terminal_agent_integration: {
        client: !0,
        fallbackValues: {
            enabled: !1
        },
        parseValue: {
            enabled: Xb
        }
    },
    ide_update_ux_exp: {
        client: !0,
        fallbackValues: {
            variant: "control"
        },
        parseValue: {
            variant: xS([
                "control",
                "sidebar",
                "non_sidebar"
            ])
        }
    },
    effort_first_model_picker: {
        client: !0,
        fallbackValues: {
            variant: "control"
        },
        parseValue: {
            variant: xS([
                "control",
                "treatment"
            ])
        }
    },
    effort_first_show_grok_name: {
        client: !0,
        fallbackValues: {},
        parseValue: {}
    }
}, Uhn = Object.keys(KOe), hPo = {
    fastRetryBaseDelayMs: ze.number().min(1e3).max(36e5),
    fastRetryMaxDelayMs: ze.number().min(1e3).max(36e5),
    fastRetryMaxAttempts: ze.number().min(1).max(20).optional(),
    periodicRetryBaseDelayMs: ze.number().min(3e4).max(36e5),
    periodicRetryMaxDelayMs: ze.number().min(3e4).max(36e5),
    maxPeriodicCycles: ze.number().min(0).max(1e4).nullish(),
    focusRetryCooldownMs: ze.number().min(5 * 6e4).max(36e5),
    inlineReconnectCooldownMs: ze.number().min(1e3).max(36e5).optional(),
    oauthBackendRefreshHydrationPollIntervalMs: ze.number().min(200).max(5e3).optional(),
    streamableHttpSession404TombstoneThreshold: ze.number().min(1).max(50).optional(),
    healthProbeTimeoutMs: ze.number().min(1e3).max(12e4).optional(),
    toolCallBoundedTimeoutEnabled: ze.boolean().optional(),
    toolCallIdleTimeoutMs: ze.number().min(5e3).max(30 * 6e4).optional(),
    toolCallMaxTotalTimeoutMs: ze.number().min(5e3).max(60 * 6e4).optional(),
    degradedProbeDelayMs: ze.number().min(1e3).max(36e5).optional(),
    maxDegradedProbeFailures: ze.number().min(1).max(20).optional(),
    keepaliveProbeDelayMs: ze.number().min(1e4).max(36e5).optional(),
    keepaliveJitterMs: ze.number().min(0).max(36e5).optional(),
    stabilityThresholdMs: ze.number().min(5e3).max(6e5).optional(),
    stdioConnectFailuresAreNonRetryable: ze.boolean().optional(),
    retryNonRetryableOnWake: ze.boolean().optional(),
    nonRetryableWakeRetryCooldownMs: ze.number().min(1e3).max(36e5).optional(),
    retryNonRetryableAutomatically: ze.boolean().optional(),
    networkResumeReconnectEnabled: ze.boolean().optional(),
    networkResumeReconnectDebounceMs: ze.number().min(0).max(18e5).optional()
}, Ald = ze.object(hPo).partial().extend({
    identifier: ze.string().optional(),
    hostname: ze.string().optional()
}).refine((t)=>t.identifier !== void 0 || t.hostname !== void 0, {
    message: "Each mcp_reconnect_config override requires identifier and/or hostname."
}), Rld = ze.object({
    ...hPo,
    overrides: ze.array(Ald).nullish()
}), Pld = 7, a_r = [
    "figma",
    "slack",
    "linear",
    "notion-workspace"
], l_r = 3, Mld = ze.discriminatedUnion("type", [
    ze.object({
        type: ze.literal("app"),
        app: ze.enum(a_r),
        title: ze.string().min(1),
        description: ze.string().min(1),
        prompt: ze.string().min(1)
    }).strict(),
    ze.object({
        type: ze.literal("icon"),
        icon: ze.string().min(1),
        title: ze.string().min(1),
        description: ze.string().min(1),
        prompt: ze.string().min(1)
    }).strict()
]), pPo = ze.array(Mld).length(a_r.length + l_r).superRefine((t, e)=>{
    const n = t.flatMap((r)=>r.type === "app" ? [
            r.app
        ] : []), i = t.length - n.length;
    i !== l_r && e.addIssue({
        code: ze.ZodIssueCode.custom,
        message: `Expected exactly ${l_r} icon actions, got ${i}`
    });
    for (const r of a_r){
        const s = n.filter((o)=>o === r).length;
        s !== 1 && e.addIssue({
            code: ze.ZodIssueCode.custom,
            message: `Expected exactly one "${r}" action, got ${s}`
        });
    }
}), mPo = ze.object({
    coding: pPo,
    tasks: pPo
}).strict(), Dld = [
    "software-engineer",
    "designer",
    "product-manager",
    "researcher",
    "data-scientist",
    "student",
    "marketer",
    "operations",
    "something-else"
], Nld = ze.record(ze.string().max(100), mPo).superRefine((t, e)=>{
    const n = new Set(Dld);
    for (const i of Object.keys(t))n.has(i) || e.addIssue({
        code: ze.ZodIssueCode.custom,
        message: `Unknown FTUX first-action job role key: ${i}`,
        path: [
            i
        ]
    });
}), UTy = {
    ci: ze.number().int().positive(),
    pr: ze.number().int().positive(),
    diff: ze.number().int().positive(),
    diff_files: ze.number().int().positive(),
    timeline: ze.number().int().positive(),
    threads: ze.number().int().positive(),
    stack: ze.number().int().positive(),
    mutations: ze.number().int().positive(),
    other: ze.number().int().positive(),
    git_reads: ze.number().int().positive()
}, Lld = {
    cursor_private_inference_hard_stop: ze.object({
        enabled: ze.boolean(),
        instructionsUrl: ze.string().nullish()
    }),
    mobile_iap_products: ze.object({
        products: ze.record(ze.string(), ze.enum([
            "pro",
            "pro_plus",
            "ultra"
        ]))
    }),
    codebase_protection_reporting_config: ze.object({
        report_interval_ms: ze.number().int().positive(),
        jitter_fraction: ze.number().min(0).max(1)
    }),
    agent_host_bridge_wait: ze.object({
        initial_timeout_ms: ze.number(),
        retry_timeout_ms: ze.number(),
        max_attempts: ze.number()
    }),
    agent_host_updater_timing: ze.object({
        pollIntervalMs: ze.number().nullable(),
        requestIdleTimeoutMs: ze.number().nullable()
    }),
    composer_request_context_deadline: ze.object({
        deadline_ms: ze.number(),
        max_stale_age_ms: ze.number()
    }),
    sand_working_state_warming_config: ze.object({
        maxClosureBytes: ze.number().int().positive(),
        maxClosureBlobs: ze.number().int().positive(),
        putConcurrency: ze.number().int().min(1).max(32),
        parallelListing: ze.boolean(),
        migrationAgentConcurrency: ze.number().int().min(1).max(32),
        migrationReadBatchBlobs: ze.number().int().min(1).max(64),
        migrationPutConcurrency: ze.number().int().min(1).max(32),
        migrationCopyConcurrency: ze.number().int().min(1).max(64),
        migrationExportCommandTimeoutMs: ze.number().int().min(6e4).max(10 * 6e4),
        migrationHostWindowMs: ze.number().int().min(6e4).max(45 * 6e4),
        migrationExportActivityTimeoutMs: ze.number().int().min(6e4).max(30 * 6e4)
    }),
    grok_bot_temporal_harness_rollout: ze.object({
        control: ze.enum([
            "legacy_gates",
            "config"
        ]),
        mode: ze.enum([
            "off",
            "shadow",
            "live"
        ]),
        autoReviewEnforce: ze.boolean()
    }),
    grok_bot_loop_detection: ze.object({
        mode: ze.enum([
            "off",
            "shadow",
            "on"
        ])
    }),
    grok_bot_external_send_labeling_config: ze.object({
        sampleRate: ze.number().min(0).max(1),
        connectors: ze.array(ze.object({
            name: ze.string().min(1),
            hosts: ze.array(ze.string().min(1)),
            sendTools: ze.array(ze.string().min(1)),
            participants: ze.object({
                args: ze.array(ze.string().min(1)).min(1),
                ownerArgs: ze.array(ze.string().min(1)).optional()
            }).optional()
        })),
        firstPartySendTools: ze.array(ze.object({
            name: ze.string().min(1),
            toolName: ze.string().min(1)
        })).optional()
    }),
    grok_bot_system_prompt_override: ze.object({
        basePrompt: ze.string()
    }),
    remote_workspace_readiness_config: ze.object({
        healthcheck_timeout_ms: ze.number().int().positive(),
        remote_extension_host_startup_grace_ms: ze.number().int().nonnegative()
    }),
    ai_code_tracking_poll: ze.object({
        interval_ms: ze.number().int().positive()
    }),
    solidjs_stack_trace_limit: ze.object({
        stackTraceLimitFloor: ze.number().int().nonnegative()
    }),
    glass_remote_connection_dormancy_config: ze.object({
        windowIdleMinutesToSuspend: ze.number().int().nonnegative(),
        hiddenAgentMinutesToSuspend: ze.number().int().nonnegative(),
        suspendWhileWindowFocused: ze.boolean(),
        maxDormantQueuedMessages: ze.number().int().positive(),
        maxDormantQueuedBytes: ze.number().int().positive(),
        hardMaxDormantQueuedMessages: ze.number().int().positive(),
        hardMaxDormantQueuedBytes: ze.number().int().positive()
    }),
    idle_extension_host_killer_config: ze.object({
        idleMinutesToKillExtensionHost: ze.number().int().nonnegative(),
        freeMemoryPercentageToKillExtensionHost: ze.number().min(0).max(100),
        killUserExtensionHost: ze.boolean()
    }),
    marketplace_listing_config: ze.object({
        rpcTimeoutMs: ze.number().int().positive()
    }),
    shell_exec_output_backpressure_config: ze.object({
        outputSuppressionWindowMs: ze.number().int().positive(),
        outputSuppressionThresholdCharsPerSecond: ze.number().int().positive(),
        outputSuppressionMinChars: ze.number().int().positive(),
        outputLimiterFlushIntervalMs: ze.number().int().positive(),
        outputLimiterMaxBufferedBytes: ze.number().int().positive(),
        extHostMinBatchIntervalMs: ze.number().int().positive(),
        extHostMaxBatchIntervalMs: ze.number().int().positive(),
        extHostBytesPerIntervalStep: ze.number().int().positive()
    }),
    editor_bugbot_config: ze.object({
        model: ze.string(),
        iterations: ze.number(),
        agentic_iterations: ze.number(),
        agentic_model: ze.string(),
        deep_review_model: ze.string(),
        context_lines: ze.number()
    }),
    client_speculative_summarization_config: ze.object({
        tokenUsageThresholdPercentage: ze.number(),
        tolerancePercentage: ze.number(),
        inflightMaxAgeMinutes: ze.number(),
        speculativeStreamTimeoutMinutes: ze.number()
    }),
    rate_limited_reconnect_message_config: ze.object({
        message: ze.string()
    }),
    new_conversation_ux_config: ze.object({
        enable: ze.boolean(),
        enabled_models: ze.array(ze.string()),
        force_enable_on_all_models: ze.boolean(),
        group_text: ze.boolean(),
        group_thinking: ze.boolean(),
        group_todos: ze.boolean(),
        group_edits: ze.boolean(),
        smooth_stream_enable: ze.boolean(),
        grouped_text_max_length: ze.number(),
        grouped_text_max_length_composer_family: ze.number(),
        tool_summary_mode: ze.string(),
        nest_tool_blocks: ze.boolean()
    }),
    meta_agent_config: ze.object({
        meta_parent_model: ze.string(),
        allow_subagent_followups: ze.boolean(),
        enable_notes: ze.boolean()
    }),
    task_card_tips: ze.object({
        startup_tips: ze.array(ze.object({
            id: ze.string(),
            text: ze.string(),
            enabled: ze.boolean().optional()
        }))
    }),
    product_tips_config: ze.object({
        tips: ze.array(ze.object({
            id: ze.string(),
            text: ze.string(),
            targetSurfaces: ze.array(ze.enum([
                "editor",
                "glass"
            ])).min(1)
        }).strict()),
        config: ze.object({
            intervalMs: ze.number().positive(),
            devIntervalMs: ze.number().positive().optional(),
            minClientVersion: ze.string()
        }).strict()
    }).strict(),
    agent_layout_migration: ze.object({
        showSettings: ze.boolean(),
        keepIsland: ze.boolean(),
        sidebarLocation: ze.enum([
            "left",
            "right",
            "user",
            "noop"
        ])
    }),
    default_diff_mode: ze.object({
        default_diff_mode: ze.enum([
            "unified",
            "diffs"
        ])
    }),
    switch_mode_tool_config: ze.object({
        enabledForNal: ze.boolean(),
        enabledForOal: ze.boolean(),
        fromModes: ze.array(ze.string()),
        targetModes: ze.array(ze.string())
    }),
    mcp_auth_status_copy_config: ze.object({
        authToolDescription: ze.string(),
        errorStatusMessage: ze.string(),
        needsAuthStatusMessageWithAuthTool: ze.string()
    }),
    mcp_reconnect_config: Rld,
    mcp_oauth_sweep_config: ze.object({
        oauthAttemptTtlMs: ze.number().min(6e4).max(10080 * 6e4),
        refreshLockTtlMs: ze.number().min(2e3).max(12e4).nullish(),
        refreshLockMaxHoldMs: ze.number().min(3e4).max(36e5).optional(),
        registrationLockTtlMs: ze.number().min(2e3).max(12e4).nullish()
    }),
    mcp_oauth_refresh_policy: ze.object({
        classifyBeforeWipe: ze.boolean()
    }),
    mcp_oauth_loopback_redirect: ze.object({
        enabled: ze.boolean(),
        denylist: ze.array(ze.string()),
        ipv4Hosts: ze.array(ze.string()).optional()
    }),
    mcp_oauth_backend_redis_lock_config: ze.object({
        operations: ze.array(ze.enum([
            "refresh",
            "registration"
        ])),
        executorKinds: ze.array(ze.enum([
            "backendHttpMcp",
            "cloudAgent",
            "agentHost",
            "localIde",
            "remoteExtensionHost"
        ])),
        providerAllowlist: ze.array(ze.string()),
        fallbackMode: ze.enum([
            "fail_open",
            "fail_closed"
        ]),
        refreshLockTtlMs: ze.number().min(2e3).max(12e4),
        registrationLockTtlMs: ze.number().min(2e3).max(12e4),
        waitPollIntervalMs: ze.number().min(25).max(5e3),
        waitJitterMs: ze.number().min(0).max(5e3),
        maxWaitMs: ze.number().min(0).max(12e4)
    }),
    sand_pressure_cpu_profiler_config: ze.object({
        sustainedPressureWindowMs: ze.number(),
        profileDurationMs: ze.number(),
        minIntervalMs: ze.number(),
        maxRetainedProfiles: ze.number()
    }),
    sand_stream_deadline_config: ze.object({
        firstTokenDeadlineMs: ze.number(),
        idleDeadlineMs: ze.number()
    }),
    inline_diff_performance_config: ze.object({
        maxDecorations: ze.number()
    }),
    tray_refresh_config: ze.object({
        enableMainProcessCloudRefresh: ze.boolean().default(!1),
        activeIntervalMs: ze.number().int().min(5e3).max(36e5),
        idleIntervalMs: ze.number().int().min(5e3).max(36e5),
        emptyIntervalMs: ze.number().int().min(5e3).max(36e5),
        engagementThrottleMs: ze.number().int().min(1e3).max(6e4),
        menuCap: ze.number().int().min(1).max(100),
        enablePoll: ze.boolean(),
        enableEngagement: ze.boolean(),
        enablePower: ze.boolean()
    }),
    performance_events_config: ze.object({
        enabled: ze.boolean(),
        flushIntervalMs: ze.number(),
        sampleRate: ze.number(),
        maxScriptsPerLoaf: ze.number(),
        maxBatchBytes: ze.number(),
        loafThresholdMs: ze.number(),
        maxEventsPerFlush: ze.number()
    }),
    composer_sandboxing_promo: ze.object({
        version: ze.number()
    }),
    sandbox_default_network_allowlist: ze.object({
        allowlist: ze.array(ze.string())
    }),
    playwright_log_configs: ze.object({
        logSizeThreshold: ze.number(),
        logPreviewLines: ze.number(),
        logPreviewChars: ze.number()
    }),
    privacy_mode_acknowledgement_onboarding: ze.object({
        mode: ze.enum([
            "off",
            "on_logged_in",
            "on"
        ])
    }),
    tools_concurrency_config: ze.object({
        tools: ze.record(ze.string(), ze.object({
            ttl: ze.number().optional(),
            maxConcurrent: ze.number().optional()
        })),
        defaultTtl: ze.number(),
        defaultMaxConcurrent: ze.number()
    }),
    client_rg: ze.object({
        num_threads: ze.number(),
        fallback_num_threads: ze.number(),
        use_batch_executor: ze.boolean(),
        batch_executor_wait_ms: ze.number()
    }),
    http2_ping_config: ze.object({
        enabled: ze.array(ze.string()),
        pingIdleConnection: ze.boolean().nullable(),
        pingIntervalMs: ze.number().nullable(),
        pingTimeoutMs: ze.number().nullable(),
        idleConnectionTimeoutMs: ze.number().nullable()
    }),
    http2_agent_connection_pool_config: ze.object({
        poolSize: ze.number()
    }),
    http1_keepalive_config: ze.object({
        keepAliveInitialDelayMs: ze.number().nullable()
    }),
    nal_websocket_client_pool: ze.object({
        maxConnections: ze.number()
    }),
    ws_dark_durability_probe_config: ze.object({
        idleHoldMs: ze.number(),
        echoTimeoutMs: ze.number(),
        concurrency: ze.number()
    }),
    abort_controller_logging_config: ze.object({
        sampling_rate: ze.number()
    }),
    hooks_client_config: ze.object({
        hooks_ready_timeout_ms: ze.number()
    }),
    composer_hang_detection_config: ze.object({
        thresholds_ms: ze.array(ze.number())
    }),
    composer_errors_without_button_support: ze.object({
        error_type_denylist: ze.array(ze.string())
    }),
    nal_stall_detector_timeout_config: ze.object({
        advisoryTimeoutMs: ze.number(),
        failTimeoutMs: ze.number()
    }),
    nal_request_context_blob_transport_config: ze.object({
        mode: ze.enum([
            "legacy",
            "dual",
            "ref_only"
        ]),
        max_blob_bytes: ze.number().int().positive(),
        max_inline_dynamic_bytes: ze.number().int().positive()
    }),
    simulated_thinking_error_timeout: ze.object({
        timeout_ms: ze.number()
    }),
    agent_loop_phase_display: ze.object({
        enabled: ze.boolean(),
        min_display_threshold_ms: ze.number()
    }),
    in_app_ads_dev_override_config: ze.object({
        ad_id_to_show: ze.string()
    }),
    in_app_ads_quiet_period_config: ze.object({
        quiet_period_ms: ze.number(),
        first_launch_quiet_period_ms: ze.number()
    }),
    environment_setup_resume_config: ze.object({
        max_resume_age_ms: ze.number().int().min(xIo).max(AIo)
    }),
    perf_monitor_control: ze.object({
        enabled: ze.boolean(),
        subsample_polling_rate_sec: ze.number(),
        sample_polling_rate_min: ze.number()
    }),
    glass_reactivated_user_routing_config: ze.object({
        user_routing_enabled: ze.boolean(),
        inactive_days: ze.number(),
        ch_timeout_ms: ze.number(),
        ch_cache_ttl_seconds: ze.number(),
        local_routing_enabled: ze.boolean()
    }),
    retry_interceptor_config: ze.object({
        retriableErrors: ze.array(ze.object({
            code: ze.string(),
            errorMessage: ze.string().optional(),
            method: ze.string().optional()
        }))
    }),
    retry_interceptor_params_config: ze.object({
        maxRetries: ze.number().nullish(),
        baseDelayMs: ze.number().nullish(),
        maxDelayMs: ze.number().nullish()
    }),
    text_delta_pacing_config: ze.object({
        targetCharsPerFrame: ze.number(),
        maxLagFrames: ze.number(),
        barrierMaxWaitMs: ze.number()
    }),
    extension_monitor_control: ze.object({
        local_enabled: ze.boolean(),
        backend_reporting_enabled: ze.boolean(),
        network_diagnostics_reporting_enabled: ze.boolean().optional(),
        subsample_polling_rate_sec: ze.number(),
        sample_polling_rate_min: ze.number()
    }),
    agent_memory_pressure_monitor: ze.object({
        monitor_enabled: ze.boolean(),
        low_memory_sustained_sec: ze.number(),
        min_agent_process_age_sec: ze.number(),
        low_memory_available_pct: ze.number(),
        low_memory_available_abs_gb: ze.number(),
        cpu_high_pct: ze.number(),
        cpu_high_sustained_sec: ze.number(),
        min_reported_cpu_pct: ze.number()
    }),
    sand_process_metrics: ze.object({
        local_enabled: ze.boolean(),
        backend_reporting_enabled: ze.boolean(),
        subsample_polling_rate_sec: ze.number(),
        sample_polling_rate_min: ze.number()
    }),
    sand_rpc_tracing: ze.object({
        enabled: ze.boolean(),
        sample_ratio: ze.number()
    }),
    gc_trace_control: ze.object({
        enabled: ze.boolean(),
        drain_interval_sec: ze.number()
    }),
    disable_infinite_cloud_agent_stream_retries: ze.object({
        enabled: ze.boolean()
    }),
    cloud_agent_shared_blob_cache: ze.object({
        max_bytes: ze.number()
    }),
    local_subagent_limits: ze.object({
        maxRunning: ze.number().int().positive()
    }),
    sand_min_client_version: ze.object({
        min_version: ze.string(),
        backend_min_version: ze.string(),
        novnc_port_token_min_version: ze.string(),
        hosted_mcp_oauth_callback_min_version: ze.string(),
        max_age_days: ze.number().int().min(0).catch(0)
    }),
    sand_mobile_version_support: ze.object({
        min_recommended_build: ze.number(),
        min_allowed_build: ze.number(),
        update_url: ze.string()
    }),
    sand_computer_use_playwright_config: ze.object({
        modelId: ze.string().min(1),
        maxMode: ze.boolean(),
        parameters: ze.array(ze.object({
            id: ze.string().min(1),
            value: ze.string()
        }))
    }),
    grok_bot_conversation_size_limits: ze.object({
        soft_limit_mb: ze.number(),
        hard_limit_mb: ze.number()
    }),
    sand_default_model: ze.object({
        modelId: ze.string(),
        maxMode: ze.boolean(),
        parameters: ze.array(ze.object({
            id: ze.string().min(1),
            value: ze.string()
        }))
    }),
    sand_automations_model: ze.object({
        modelId: ze.string(),
        maxMode: ze.boolean(),
        parameters: ze.array(ze.object({
            id: ze.string().min(1),
            value: ze.string()
        }))
    }),
    sand_feedback_prompt_config: ze.object({
        enabled: ze.boolean(),
        sample_rate_denominator: ze.number(),
        cooldown_seconds: ze.number(),
        signup_grace_seconds: ze.number()
    }),
    agent_store_sync_client_config: ze.object({
        sync_debounce_ms: ze.number().int().min(250).max(36e5),
        idle_backoff_factor: ze.number().min(1).max(4).optional(),
        sync_idle_max_ms: ze.number().int().min(250).max(36e5).optional(),
        idle_quiesce_ms: ze.number().int().min(0).max(36e5).optional(),
        large_target_ttl_ms: ze.number().int().min(60 * 1e3).max(1440 * 60 * 1e3).optional(),
        sync_backoff_base_ms: ze.number().int().min(100).max(36e5),
        sync_backoff_max_ms: ze.number().int().min(100).max(36e5),
        project_sync_debounce_ms: ze.number().int().min(250).max(36e5),
        project_sync_idle_max_ms: ze.number().int().min(250).max(36e5).optional(),
        project_sync_backoff_base_ms: ze.number().int().min(100).max(36e5),
        project_sync_backoff_max_ms: ze.number().int().min(100).max(36e5),
        passive_retry_interval_ms: ze.number().int().min(0).max(36e5),
        passive_index_poll_interval_ms: ze.number().int().min(0).max(36e5),
        project_store_poll_interval_ms: ze.number().int().min(250).max(36e5),
        path_refresh_min_interval_ms: ze.number().int().min(0).max(36e5).optional(),
        project_notes_poll_interval_ms: ze.number().int().min(1e3).max(36e5).optional(),
        max_file_size_bytes: ze.number().int().min(1024).max(1024 * 1024 * 1024),
        token_refresh_buffer_ms: ze.number().int().min(0).max(10 * 6e4),
        mint_terminal_denial_cache_ms: ze.union([
            ze.literal(0),
            ze.number().int().min(6e4).max(1440 * 60 * 1e3)
        ]).optional(),
        skip_denied_mount_sync: ze.union([
            ze.literal(0),
            ze.literal(1)
        ]).optional(),
        rpc_retry_max_attempts: ze.number().int().min(1).max(10),
        rpc_retry_base_delay_ms: ze.number().int().min(1).max(6e4),
        rpc_retry_max_delay_ms: ze.number().int().min(1).max(5 * 6e4),
        rpc_retry_multiplier: ze.number().min(1).max(10),
        token_refresh_jitter_ratio: ze.union([
            ze.literal(0),
            ze.number().min(.05).max(.9)
        ]).optional(),
        min_token_slack_ms: ze.number().int().min(0).max(6e4).optional(),
        mint_retry_policy_version: ze.union([
            ze.literal(0),
            ze.literal(1)
        ]).optional(),
        mint_retry_max_attempts: ze.number().int().min(1).max(5).optional(),
        mint_retry_base_delay_ms: ze.number().int().min(1).max(1e4).optional(),
        mint_retry_max_delay_ms: ze.number().int().min(1).max(6e4).optional(),
        mint_retry_budget_ratio: ze.number().min(0).max(1).optional(),
        mint_retry_budget_floor: ze.number().int().min(0).max(100).optional(),
        mint_transient_negative_cache_base_ms: ze.number().int().min(100).max(10 * 6e4).optional(),
        mint_transient_negative_cache_max_ms: ze.number().int().min(100).max(60 * 6e4).optional(),
        mint_gate_open_threshold: ze.number().int().min(1).max(1e3).optional(),
        mint_gate_window_ms: ze.number().int().min(1e3).max(10 * 6e4).optional(),
        mint_gate_open_base_ms: ze.number().int().min(100).max(10 * 6e4).optional(),
        mint_gate_open_max_ms: ze.number().int().min(100).max(60 * 6e4).optional(),
        rpc_timeout_ms: ze.number().int().min(1e3).max(6e5),
        blob_idle_timeout_ms: ze.union([
            ze.literal(0),
            ze.number().int().min(1e3).max(6e5)
        ]),
        blob_connect_timeout_ms: ze.union([
            ze.literal(0),
            ze.number().int().min(1e3).max(3e5)
        ]).optional(),
        sync_round_timeout_ms: ze.union([
            ze.literal(0),
            ze.number().int().min(3e4).max(36e5)
        ]),
        sync_round_progress_timeout_ms: ze.union([
            ze.literal(0),
            ze.number().int().min(3e4).max(36e5)
        ]).optional(),
        sync_round_hard_cap_ms: ze.union([
            ze.literal(0),
            ze.number().int().min(6e4).max(72e5)
        ]).optional(),
        sync_round_unwind_timeout_ms: ze.number().int().min(1e3).max(6e5),
        lock_release_failure_threshold: ze.number().int().min(1).max(20),
        lock_release_failure_streak_threshold: ze.number().int().min(0).max(100).optional(),
        lock_release_failure_streak_passive_ms: ze.number().int().min(5e3).max(36e5).optional(),
        resume_gap_threshold_ms: ze.union([
            ze.literal(0),
            ze.number().int().min(3e4).max(36e5)
        ]),
        resume_detection_mode: ze.enum([
            "mono_gap",
            "timer_lateness"
        ]).optional(),
        dirty_passive_stalled_threshold_ms: ze.union([
            ze.literal(0),
            ze.number().int().min(3e4).max(36e5)
        ]),
        s3_concurrency: ze.number().int().min(1).max(64),
        list_concurrency: ze.number().int().min(1).max(64),
        list_walk_concurrency: ze.number().int().min(1).max(64).optional(),
        hash_concurrency: ze.number().int().min(1).max(64),
        presign_concurrency: ze.number().int().min(1).max(64),
        multipart_upload_threshold_bytes: ze.number().int().min(5 * 1024 * 1024).max(1024 * 1024 * 1024),
        multipart_part_size_bytes: ze.number().int().min(5 * 1024 * 1024).max(512 * 1024 * 1024),
        multipart_presign_window_size: ze.number().int().min(1).max(32),
        pull_presign_window_size: ze.number().int().min(1).max(1e3),
        multipart_complete_max_attempts: ze.number().int().min(1).max(5),
        multipart_max_restarts: ze.number().int().min(0).max(2),
        multipart_max_conflict_renames: ze.number().int().min(0).max(2),
        multipart_max_expiry_refreshes: ze.number().int().min(0).max(3),
        write_barrier_timeout_ms: ze.number().int().min(0).max(6e4),
        scoped_reserved_slots: ze.number().int().min(0).max(8),
        path_sync_request_poll_ms: ze.number().int().min(0).max(6e4),
        path_sync_request_wait_poll_ms: ze.number().int().min(1).max(6e4),
        exclusive_mutation_claim_poll_ms: ze.number().int().min(50).max(6e4),
        shared_scheduler: ze.boolean().optional(),
        periodic_coalesce_ms: ze.number().int().min(250).max(3e4).optional(),
        remote_version_enabled: ze.boolean().optional(),
        version_full_list_interval_ms: ze.number().int().min(3600 * 1e3).max(10080 * 60 * 1e3).optional(),
        version_audit_sample_rate: ze.number().min(0).max(1).optional(),
        version_probe_enabled: ze.boolean().optional(),
        version_probe_max_entries: ze.number().int().min(1).max(100).optional(),
        stale_store_root_max_idle_ms: ze.number().int().min(0),
        store_root_id_fence: ze.boolean().optional(),
        index_closed_invalidates_session: ze.boolean().optional(),
        store_eviction_mode: ze.enum([
            "legacy_sweep",
            "off",
            "dry_run",
            "quarantine",
            "on"
        ]).optional(),
        store_eviction_quarantine_ms: ze.number().int().min(0).optional(),
        store_eviction_max_roots_per_run: ze.number().int().min(1).optional(),
        store_eviction_max_hash_bytes_per_run: ze.number().int().min(1).optional(),
        store_eviction_mark_ttl_ms: ze.number().int().min(1e3).max(600 * 1e3).optional(),
        store_eviction_min_interval_ms: ze.number().int().min(0).optional(),
        tombstone_full_refresh_rounds: ze.number().int().min(1),
        tombstone_full_refresh_interval_ms: ze.number().int().min(0),
        tombstone_prune_slack_ms: ze.number().int().min(0),
        local_stat_fast_path: ze.enum([
            "off",
            "posix",
            "all"
        ]).optional(),
        push_order: ze.enum([
            "scan",
            "size_asc"
        ]).optional(),
        local_stat_fast_path_audit_rate: ze.number().min(0).max(1).optional(),
        local_stat_racy_margin_ms: ze.number().int().min(0).max(6e4).optional(),
        harness_recovery_policy: ze.enum([
            "latch",
            "recover"
        ]).optional(),
        harness_recovery_start_jitter_ms: ze.number().int().min(0).max(3e5).optional(),
        harness_recovery_probe_base_ms: ze.number().int().min(1e3).max(36e5).optional(),
        harness_recovery_probe_max_ms: ze.number().int().min(1e3).max(36e5).optional(),
        harness_remembered_mounts_max: ze.number().int().min(0).max(64).optional(),
        mount_policy: ze.enum([
            "eager",
            "lazy"
        ]).nullable().optional(),
        surfaces: ze.record(ze.string(), ze.object({
            sync_debounce_ms: ze.number().int().min(250).max(36e5).optional(),
            idle_backoff_factor: ze.number().min(1).max(4).optional(),
            sync_idle_max_ms: ze.number().int().min(250).max(36e5).optional(),
            idle_quiesce_ms: ze.number().int().min(0).max(36e5).optional(),
            large_target_ttl_ms: ze.number().int().min(60 * 1e3).max(1440 * 60 * 1e3).optional(),
            sync_backoff_base_ms: ze.number().int().min(100).max(36e5).optional(),
            sync_backoff_max_ms: ze.number().int().min(100).max(36e5).optional(),
            project_sync_debounce_ms: ze.number().int().min(250).max(36e5).optional(),
            project_sync_idle_max_ms: ze.number().int().min(250).max(36e5).optional(),
            project_sync_backoff_base_ms: ze.number().int().min(100).max(36e5).optional(),
            project_sync_backoff_max_ms: ze.number().int().min(100).max(36e5).optional(),
            passive_retry_interval_ms: ze.number().int().min(0).max(36e5).optional(),
            passive_index_poll_interval_ms: ze.number().int().min(0).max(36e5).optional(),
            project_store_poll_interval_ms: ze.number().int().min(250).max(36e5).optional(),
            path_refresh_min_interval_ms: ze.number().int().min(0).max(36e5).optional(),
            project_notes_poll_interval_ms: ze.number().int().min(1e3).max(36e5).optional(),
            max_file_size_bytes: ze.number().int().min(1024).max(1024 * 1024 * 1024).optional(),
            token_refresh_buffer_ms: ze.number().int().min(0).max(10 * 6e4).optional(),
            mint_terminal_denial_cache_ms: ze.union([
                ze.literal(0),
                ze.number().int().min(6e4).max(1440 * 60 * 1e3)
            ]).optional(),
            skip_denied_mount_sync: ze.union([
                ze.literal(0),
                ze.literal(1)
            ]).optional(),
            rpc_retry_max_attempts: ze.number().int().min(1).max(10).optional(),
            rpc_retry_base_delay_ms: ze.number().int().min(1).max(6e4).optional(),
            rpc_retry_max_delay_ms: ze.number().int().min(1).max(5 * 6e4).optional(),
            rpc_retry_multiplier: ze.number().min(1).max(10).optional(),
            token_refresh_jitter_ratio: ze.union([
                ze.literal(0),
                ze.number().min(.05).max(.9)
            ]).optional(),
            min_token_slack_ms: ze.number().int().min(0).max(6e4).optional(),
            mint_retry_policy_version: ze.union([
                ze.literal(0),
                ze.literal(1)
            ]).optional(),
            mint_retry_max_attempts: ze.number().int().min(1).max(5).optional(),
            mint_retry_base_delay_ms: ze.number().int().min(1).max(1e4).optional(),
            mint_retry_max_delay_ms: ze.number().int().min(1).max(6e4).optional(),
            mint_retry_budget_ratio: ze.number().min(0).max(1).optional(),
            mint_retry_budget_floor: ze.number().int().min(0).max(100).optional(),
            mint_transient_negative_cache_base_ms: ze.number().int().min(100).max(10 * 6e4).optional(),
            mint_transient_negative_cache_max_ms: ze.number().int().min(100).max(60 * 6e4).optional(),
            mint_gate_open_threshold: ze.number().int().min(1).max(1e3).optional(),
            mint_gate_window_ms: ze.number().int().min(1e3).max(10 * 6e4).optional(),
            mint_gate_open_base_ms: ze.number().int().min(100).max(10 * 6e4).optional(),
            mint_gate_open_max_ms: ze.number().int().min(100).max(60 * 6e4).optional(),
            rpc_timeout_ms: ze.number().int().min(1e3).max(6e5).optional(),
            blob_idle_timeout_ms: ze.union([
                ze.literal(0),
                ze.number().int().min(1e3).max(6e5)
            ]).optional(),
            blob_connect_timeout_ms: ze.union([
                ze.literal(0),
                ze.number().int().min(1e3).max(3e5)
            ]).optional(),
            sync_round_timeout_ms: ze.union([
                ze.literal(0),
                ze.number().int().min(3e4).max(36e5)
            ]).optional(),
            sync_round_progress_timeout_ms: ze.union([
                ze.literal(0),
                ze.number().int().min(3e4).max(36e5)
            ]).optional(),
            sync_round_hard_cap_ms: ze.union([
                ze.literal(0),
                ze.number().int().min(6e4).max(72e5)
            ]).optional(),
            sync_round_unwind_timeout_ms: ze.number().int().min(1e3).max(6e5).optional(),
            lock_release_failure_threshold: ze.number().int().min(1).max(20).optional(),
            lock_release_failure_streak_threshold: ze.number().int().min(0).max(100).optional(),
            lock_release_failure_streak_passive_ms: ze.number().int().min(5e3).max(36e5).optional(),
            resume_gap_threshold_ms: ze.union([
                ze.literal(0),
                ze.number().int().min(3e4).max(36e5)
            ]).optional(),
            resume_detection_mode: ze.enum([
                "mono_gap",
                "timer_lateness"
            ]).optional(),
            dirty_passive_stalled_threshold_ms: ze.union([
                ze.literal(0),
                ze.number().int().min(3e4).max(36e5)
            ]).optional(),
            s3_concurrency: ze.number().int().min(1).max(64).optional(),
            list_concurrency: ze.number().int().min(1).max(64).optional(),
            list_walk_concurrency: ze.number().int().min(1).max(64).optional(),
            hash_concurrency: ze.number().int().min(1).max(64).optional(),
            presign_concurrency: ze.number().int().min(1).max(64).optional(),
            multipart_upload_threshold_bytes: ze.number().int().min(5 * 1024 * 1024).max(1024 * 1024 * 1024).optional(),
            multipart_part_size_bytes: ze.number().int().min(5 * 1024 * 1024).max(512 * 1024 * 1024).optional(),
            multipart_presign_window_size: ze.number().int().min(1).max(32).optional(),
            pull_presign_window_size: ze.number().int().min(1).max(1e3).optional(),
            multipart_complete_max_attempts: ze.number().int().min(1).max(5).optional(),
            multipart_max_restarts: ze.number().int().min(0).max(2).optional(),
            multipart_max_conflict_renames: ze.number().int().min(0).max(2).optional(),
            multipart_max_expiry_refreshes: ze.number().int().min(0).max(3).optional(),
            write_barrier_timeout_ms: ze.number().int().min(0).max(6e4).optional(),
            scoped_reserved_slots: ze.number().int().min(0).max(8).optional(),
            path_sync_request_poll_ms: ze.number().int().min(0).max(6e4).optional(),
            path_sync_request_wait_poll_ms: ze.number().int().min(1).max(6e4).optional(),
            exclusive_mutation_claim_poll_ms: ze.number().int().min(50).max(6e4).optional(),
            shared_scheduler: ze.boolean().optional(),
            periodic_coalesce_ms: ze.number().int().min(250).max(3e4).optional(),
            remote_version_enabled: ze.boolean().optional(),
            version_full_list_interval_ms: ze.number().int().min(3600 * 1e3).max(10080 * 60 * 1e3).optional(),
            version_audit_sample_rate: ze.number().min(0).max(1).optional(),
            version_probe_enabled: ze.boolean().optional(),
            version_probe_max_entries: ze.number().int().min(1).max(100).optional(),
            stale_store_root_max_idle_ms: ze.number().int().min(0).optional(),
            store_root_id_fence: ze.boolean().optional(),
            index_closed_invalidates_session: ze.boolean().optional(),
            store_eviction_mode: ze.enum([
                "legacy_sweep",
                "off",
                "dry_run",
                "quarantine",
                "on"
            ]).optional(),
            store_eviction_quarantine_ms: ze.number().int().min(0).optional(),
            store_eviction_max_roots_per_run: ze.number().int().min(1).optional(),
            store_eviction_max_hash_bytes_per_run: ze.number().int().min(1).optional(),
            store_eviction_mark_ttl_ms: ze.number().int().min(1e3).max(600 * 1e3).optional(),
            store_eviction_min_interval_ms: ze.number().int().min(0).optional(),
            tombstone_full_refresh_rounds: ze.number().int().min(1).optional(),
            tombstone_full_refresh_interval_ms: ze.number().int().min(0).optional(),
            tombstone_prune_slack_ms: ze.number().int().min(0).optional(),
            local_stat_fast_path: ze.enum([
                "off",
                "posix",
                "all"
            ]).optional(),
            push_order: ze.enum([
                "scan",
                "size_asc"
            ]).optional(),
            local_stat_fast_path_audit_rate: ze.number().min(0).max(1).optional(),
            local_stat_racy_margin_ms: ze.number().int().min(0).max(6e4).optional(),
            harness_recovery_policy: ze.enum([
                "latch",
                "recover"
            ]).optional(),
            harness_recovery_start_jitter_ms: ze.number().int().min(0).max(3e5).optional(),
            harness_recovery_probe_base_ms: ze.number().int().min(1e3).max(36e5).optional(),
            harness_recovery_probe_max_ms: ze.number().int().min(1e3).max(36e5).optional(),
            harness_remembered_mounts_max: ze.number().int().min(0).max(64).optional(),
            mount_policy: ze.enum([
                "eager",
                "lazy"
            ]).nullable().optional()
        }).strict()).default({})
    }).strict(),
    local_subscription_mint_cache_config: ze.object({
        mint_refresh_slack_ms: ze.number().int().min(0).max(10 * 6e4),
        mint_failure_base_ms: ze.number().int().min(100).max(6e4),
        mint_failure_max_ms: ze.number().int().min(1e3).max(10 * 6e4),
        mint_failure_jitter: ze.number().min(0).max(.5),
        mint_cache_max_conversations: ze.number().int().min(16).max(4096)
    }),
    gemini_video_attachment_config: ze.object({
        maxBytes: ze.number().int().positive(),
        inlineMaxBytes: ze.number().int().positive(),
        signedUrlMaxBytes: ze.number().int().positive(),
        cloudMaxVideoAttachmentsPerRequest: ze.number().int().nonnegative(),
        cloudMaxDocumentAttachmentsPerRequest: ze.number().int().nonnegative(),
        localMaxVideoAttachmentsPerRequest: ze.number().int().positive(),
        localMaxTotalInlineVideoBytesPerRequest: ze.number().int().positive()
    }),
    background_composer_list_limit: ze.object({
        limit: ze.number()
    }),
    switch_to_model_slug_config: ze.object({
        modelSlug: ze.string(),
        modelIdWithParams: ze.object({
            modelId: ze.string(),
            params: ze.array(ze.object({
                id: ze.string(),
                value: ze.string()
            }))
        })
    }),
    debug_mode_ui_instructions_config: ze.object({
        proceed_instructions: ze.string(),
        mark_fixed_instructions: ze.string()
    }),
    user_intent_config: ze.object({
        maxChatsToRead: ze.number(),
        maxProjectsToGroup: ze.number(),
        model: ze.string(),
        promptTemplate: ze.string(),
        secondStepPromptTemplate: ze.string()
    }),
    browser_default_url_config: ze.object({
        defaultUrl: ze.string()
    }),
    glass_per_app_tabs_config: ze.object({
        agentTabSelectionTTL: ze.number()
    }),
    glass_tiling_config: ze.object({
        showDraftsInSidebar: ze.boolean()
    }),
    glass_fsd_launch_pill_config: ze.object({
        pillLabel: ze.string().min(1).max(80),
        tooltip: ze.string().min(1).max(240),
        dropdownAriaLabel: ze.string().min(1).max(120),
        cloudOptionLabel: ze.string().min(1).max(80),
        localOptionLabel: ze.string().min(1).max(80),
        fixCiPillSingleLabel: ze.string().min(1).max(80),
        fixCiPillPluralLabelTemplate: ze.string().min(1).max(120),
        fixCiPillLoadingLabel: ze.string().min(1).max(80),
        fixCiPillLoadingProgressLabel: ze.string().min(1).max(80),
        fsdFixCiPillSingleLabel: ze.string().min(1).max(80),
        fsdFixCiPillPluralLabelTemplate: ze.string().min(1).max(120),
        fsdFixCiPillLoadingLabel: ze.string().min(1).max(80),
        fsdFixCiPillLoadingProgressLabel: ze.string().min(1).max(80)
    }),
    grok_bot_contextual_banner_copy: ze.object({
        title: ze.string().min(1).max(120),
        description: ze.string().min(1).max(240),
        downloadCtaLabel: ze.string().min(1).max(40),
        downloadUrl: ze.string().url(),
        openCtaLabel: ze.string().min(1).max(40),
        openUrl: ze.string().min(1).max(2048)
    }),
    glass_btw_side_question_prompt_config: ze.object({
        promptTemplate: ze.string()
    }),
    glass_loaded_agent_lru_cap: ze.object({
        max_loaded_agents: ze.number().int().min(2).max(10)
    }),
    composer_hidden_bubble_eviction: ze.object({
        enabled: ze.boolean(),
        keep_recent_hidden: ze.number().int().min(0)
    }),
    glass_large_file_gate_config: ze.object({
        code_gate_bytes: ze.number().int().min(153600).max(52428800)
    }),
    glass_workspace_lifecycle_metrics: ze.object({
        enabled: ze.boolean(),
        sweep_interval_ms: ze.number().int().positive(),
        retained_after_close_threshold_ms: ze.number().int().positive()
    }),
    glass_pr_operations_polling_config: ze.object({
        prChecksPollIntervalMs: ze.number().int().positive(),
        prChecksPollMaxBackoffMs: ze.number().int().positive(),
        prChecksErrorBackoffMultiplier: ze.number().min(1).max(4),
        prChecksCacheTtlSeconds: ze.number().int().positive(),
        scmPrMetadataCacheTtlSeconds: ze.number().int().positive(),
        scmPrDetailedStatusCacheTtlSeconds: ze.number().int().positive(),
        scmPrForBranchCacheTtlWhenPrsSeconds: ze.number().int().positive(),
        scmPrForBranchCacheTtlWhenEmptySeconds: ze.number().int().positive(),
        scmPrCodeownersCacheTtlSeconds: ze.number().int().positive(),
        scmPrCommitsCacheTtlSeconds: ze.number().int().positive(),
        scmPrTimelineEventsCacheTtlSeconds: ze.number().int().positive(),
        scmPrDiscussionsCacheTtlSeconds: ze.number().int().positive(),
        scmPrCheckLogExcerptOkTtlSeconds: ze.number().int().positive(),
        scmPrCheckLogExcerptNegativeTtlSeconds: ze.number().int().positive(),
        detailedPrStatusChecksScopedAuthBreakerTtlSeconds: ze.number().int().positive(),
        scmGitlabEmojiReactionCacheTtlSeconds: ze.number().int().positive(),
        localAgentPrHeaderBatchPollIntervalMs: ze.number().int().positive(),
        localAgentPrStatePollIntervalMs: ze.number().int().positive(),
        localAgentPrBurstBumpOffsetsMs: ze.array(ze.number().int().nonnegative()),
        cloudAgentPrStatePollIntervalMs: ze.number().int().positive(),
        cloudAgentPrBurstBumpOffsetsMs: ze.array(ze.number().int().nonnegative()),
        cloudAgentPrStatePollMaxBackoffMs: ze.number().int().positive(),
        cloudAgentPrErrorBackoffMultiplier: ze.number().min(1).max(4)
    }),
    cloud_agent_stream_reattach: ze.object({
        enabled: ze.boolean(),
        rehydrateAfterMs: ze.number().int().nonnegative()
    }),
    cloud_agent_stream_conversation_turn_window: ze.object({
        maxTurns: ze.number().int().positive().nullish()
    }),
    tool_limits_config: ze.object({
        readFilesToolMaxFileSizeInBytes: ze.number(),
        editFileToolMaxFileSizeInChars: ze.number(),
        fileSearchToolMaxResults: ze.number(),
        listDirV2ClientSideCharacterBudget: ze.number(),
        readFileV2ToolMaxFileSizeInBytes: ze.number(),
        composerDiffMaxComputationTimeMs: ze.number()
    }),
    update_prompt_config: ze.object({
        min_hours_between_prompts: ze.number(),
        max_prompts_per_version: ze.number(),
        max_prompts_per_day: ze.number(),
        snooze_duration_hours: ze.number()
    }),
    internal_release_track_override: ze.object({
        releaseTrack: ze.string(),
        statsigUrl: ze.string(),
        unlockInternalTracks: ze.boolean()
    }),
    sand_internal_release_track_override: ze.object({
        releaseTrack: ze.string(),
        unlockInternalTracks: ze.boolean()
    }),
    sand_share_bot_export_policy: ze.object({
        policy: ze.enum([
            "all",
            "team_only",
            "none"
        ])
    }),
    sand_usage_breakdown: ze.object({
        enabled: ze.boolean(),
        include_credits: ze.boolean()
    }),
    sand_host_bundle_channel: ze.object({
        channel: ze.string(),
        watchIntervalMs: ze.number().min(10 * 6e4).max(10080 * 6e4).nullable()
    }),
    giant_json_stringify_config: ze.object({
        sentry_threshold_bytes: ze.number(),
        attach_content: ze.boolean()
    }),
    giant_buffer_retention_config: ze.object({
        allocation_threshold_bytes: ze.number(),
        blob_url_threshold_bytes: ze.number(),
        retention_age_ms: ze.number(),
        sweep_interval_ms: ze.number()
    }),
    giant_json_parse_config: ze.object({
        sentry_threshold_bytes: ze.number()
    }),
    giant_vsbuffer_decode_config: ze.object({
        sentry_threshold_bytes: ze.number()
    }),
    mcp_ipc_timeouts: ze.object({
        metadata_timeout_ms: ze.number(),
        lifecycle_timeout_ms: ze.number(),
        dashboard_timeout_ms: ze.number(),
        recovery_per_retry_timeout_ms: ze.number()
    }),
    sentry_session_recording_config: ze.object({
        replays_session_sample_rate: ze.number().min(0).max(1)
    }),
    extension_signature_verification_bypass_list: ze.object({
        extensionIds: ze.array(ze.string()),
        remoteVerificationMinVersion: ze.string()
    }),
    auto_spillover_ui_config: ze.object({
        autoTitle: ze.string(),
        autoDescription: ze.string(),
        apiTitle: ze.string(),
        apiDescription: ze.string(),
        autoBeyondLimitDescription: ze.string(),
        autoUsageBarLabel: ze.string(),
        apiUsageBarLabel: ze.string()
    }),
    glass_perf_vote_config: ze.object({
        enabled: ze.boolean(),
        tagLabel: ze.string(),
        yellowTooltip: ze.string(),
        redTooltip: ze.string(),
        yellowTitle: ze.string(),
        redTitle: ze.string(),
        noteSubtitle: ze.string(),
        notePlaceholder: ze.string()
    }),
    portal_outage_alert: ze.object({
        enabled: ze.boolean(),
        title: ze.string(),
        description: ze.string()
    }),
    file_watcher_metrics_config: ze.object({
        flush_delay_ms: ze.number().int().positive()
    }),
    file_watcher_forwarded_storm_config: ze.object({
        window_ms: ze.number().int().positive(),
        min_events: ze.number().int().positive(),
        report_throttle_ms: ze.number().int().positive(),
        top_buckets: ze.number().int().positive()
    }),
    cloud_agent_list_stream_config: ze.object({
        enabled_platforms: ze.array(ze.string()),
        safety_poll_interval_ms: ze.number().int().positive(),
        inactivity_timeout_ms: ze.number().int().positive(),
        max_consecutive_failures: ze.number().int().positive(),
        reconnect_base_delay_ms: ze.number().int().positive(),
        reconnect_max_delay_ms: ze.number().int().positive(),
        reconcile_delay_ms: ze.number().int().positive(),
        use_list_page_tokens: ze.boolean(),
        split_project_list: ze.boolean(),
        exclude_archived_default: ze.boolean(),
        projects_only_owner_lookup: ze.boolean(),
        projects_only_owner_lookup_max_projects: ze.number().int().nonnegative(),
        membership_poll_interval_ms: ze.number().int().nonnegative(),
        membership_safety_poll_interval_ms: ze.number().int().nonnegative()
    }),
    statsig_dummy_gauge_config: ze.object({
        dummy: ze.number()
    }),
    memory_monitor_user_toast_config: ze.object({
        heap_percent: ze.number()
    }),
    cpu_monitor_config: ze.object({
        total_cpu_percent: ze.number(),
        process_cpu_percent: ze.number(),
        sustained_seconds: ze.number(),
        check_interval_seconds: ze.number(),
        cooldown_seconds: ze.number(),
        include_system_processes: ze.boolean()
    }),
    memory_pressure_profiling_config: ze.object({
        trigger_heap_percent: ze.number(),
        duration_seconds: ze.number(),
        sampling_interval_bytes: ze.number(),
        cooldown_seconds: ze.number()
    }),
    webview_inventory_config: ze.object({
        enabled: ze.boolean(),
        metrics_interval_seconds: ze.number().positive(),
        sample_interval_minutes: ze.number().positive()
    }),
    memory_monitor_config: ze.object({
        base_threshold_mb: ze.number().positive(),
        critical_offset_mb: ze.number().positive(),
        show_status_entry: ze.boolean(),
        show_internal_warning_popup: ze.boolean(),
        show_user_toast: ze.boolean(),
        user_toast_heap_percent: ze.number().min(1).max(100),
        emit_heap_usage_metric: ze.boolean(),
        emergency_profiling_enabled: ze.boolean(),
        emergency_profiling_trigger_heap_percent: ze.number().min(1).max(100),
        emergency_profiling_duration_seconds: ze.number().positive(),
        emergency_profiling_sampling_interval_bytes: ze.number().positive(),
        emergency_profiling_cooldown_seconds: ze.number().positive()
    }),
    slack_mcp_client_id: ze.object({
        clientId: ze.string()
    }),
    shopify_mcp_client_id: ze.object({
        clientId: ze.string()
    }),
    plugin_onboarding_by_job_role: ze.object({
        byJobRole: ze.record(ze.string().max(100), ze.array(ze.object({
            pluginName: ze.string().min(1).max(100),
            title: ze.string().min(1),
            description: ze.string().min(1),
            prompt: ze.string().min(1).max(9979)
        }))),
        recommendedPluginNamesByJobRole: ze.record(ze.string().max(100), ze.array(ze.string().min(1).max(100)).max(4))
    }),
    leaked_disposables_tracker: ze.object({
        enabled: ze.boolean(),
        reportIntervalMs: ze.number()
    }),
    gc_disposable_leak_reporting: ze.object({
        enabled: ze.boolean(),
        sessionSampleRate: ze.number().min(0).max(1)
    }),
    solidjs_memo_audit_config: ze.object({
        enabled: ze.boolean(),
        sampleRate: ze.number(),
        maxEventsPerFlush: ze.number(),
        reportIntervalMs: ze.number(),
        deepProbe: ze.boolean(),
        deepProbeSampleRate: ze.number(),
        deepProbeMaxBytes: ze.number(),
        stackAttribution: ze.boolean(),
        stackCreationSampleRate: ze.number(),
        stackRedundantThreshold: ze.number(),
        maxTrackedCreationStacks: ze.number(),
        maxStackReportsPerSession: ze.number(),
        maxStackBytes: ze.number()
    }),
    solidjs_listener_stacks_config: ze.object({
        enabled: ze.boolean(),
        sampleRate: ze.number(),
        observerThreshold: ze.number(),
        maxTrackedSources: ze.number(),
        maxReportsPerSession: ze.number(),
        maxStackBytes: ze.number(),
        totalObserverThreshold: ze.number(),
        totalTriggeredSourceFloor: ze.number(),
        totalTriggeredMaxReports: ze.number()
    }),
    canvas_prompt_text_config: ze.object({
        skillDescription: ze.string(),
        errorFixPromptTemplate: ze.string(),
        welcomePageEnabled: ze.boolean(),
        marketplaceCategoryKey: ze.string(),
        marketplaceMaxCards: ze.number().int().positive()
    }),
    glass_ftux_first_action_config: ze.object({
        byJobRole: Nld
    }).strict(),
    shutdown_hang_watchdog_config: ze.object({
        per_joiner_warn_ms: ze.number().int().nonnegative(),
        fire_on_will_shutdown_total_ms: ze.number().int().nonnegative(),
        process_exit_total_ms: ze.number().int().nonnegative()
    }),
    update_diagnostics: ze.object({
        enabled: ze.boolean(),
        restart_time_threshold_seconds: ze.number().nonnegative(),
        attach_ship_it_log: ze.boolean(),
        max_attachment_bytes: ze.number().int().nonnegative()
    }),
    startup_diagnostics: ze.object({
        enabled: ze.boolean(),
        timer_name: ze.enum([
            "ellapsedLoadMainBundle",
            "ellapsedRunMainBundle",
            "ellapsedAppReady",
            "ellapsedExtensions",
            "ellapsedExtensionsReady",
            "ellapsedWindowLoad",
            "ellapsedRequire",
            "ellapsedEditorRestore",
            "ellapsedWorkbench",
            "ellapsedPreWorkbenchServices"
        ]),
        threshold_ms: ze.number().nonnegative()
    }),
    renderer_ping_config: ze.object({
        enabled: ze.boolean(),
        ping_interval_ms: ze.number().int().positive(),
        block_threshold_ms: ze.number().int().positive(),
        collect_stack_traces: ze.boolean(),
        report_rpc_drain: ze.boolean().optional()
    }),
    main_watcher_stall_probe_config: ze.object({
        enabled: ze.boolean(),
        flush_threshold_ms: ze.number().int().positive(),
        anchor_interval_ms: ze.number().int().positive(),
        anchor_lag_ms: ze.number().int().positive(),
        cooldown_ms: ze.number().int().positive(),
        session_cap: ze.number().int().positive()
    }),
    editor_input_latency_metrics_config: ze.object({
        enabled: ze.boolean(),
        sample_rate: ze.number().min(0).max(1),
        window_duration_ms: ze.number().int().positive()
    }),
    editor_tokenization_metrics_config: ze.object({
        enabled: ze.boolean(),
        sample_rate: ze.number().min(0).max(1),
        time_limit_ms: ze.number().int().positive().optional()
    }),
    ripgrep_invocation_monitor_config: ze.object({
        window_ms: ze.number().int().positive(),
        threshold: ze.number().int().positive(),
        max_records: ze.number().int().positive(),
        cooldown_ms: ze.number().int().nonnegative(),
        report_to_sentry: ze.boolean(),
        report_initialize_caches: ze.boolean()
    }),
    grep_fallback_monitor_config: ze.object({
        window_ms: ze.number().int().positive(),
        min_samples: ze.number().int().positive(),
        fallback_ratio_threshold: ze.number().min(0).max(1),
        cooldown_ms: ze.number().int().nonnegative(),
        report_to_sentry: ze.boolean()
    }),
    instant_grep_indexing_config: ze.object({
        max_in_memory_documents: ze.number().int().positive().nullish()
    }),
    git_diff_reply_limit_config: ze.object({
        enabled: ze.boolean(),
        max_reply_bytes: ze.number().int().positive()
    }),
    renderer_slow_interaction_sentry_config: ze.object({
        enabled: ze.boolean(),
        threshold_ms: ze.number().int().positive(),
        commit_attribution: ze.boolean().nullish()
    }),
    glass_fps_monitor_config: ze.object({
        enabled: ze.boolean(),
        min_fps: ze.number().int().positive(),
        max_drops_per_interval: ze.number().int().nonnegative(),
        interval_sec: ze.number().int().positive(),
        baseline_interval_sec: ze.number().int().positive().nullish(),
        baseline_sample_rate: ze.number().min(0).max(1).nullish()
    }),
    xai_team_link_create_mode: ze.object({
        mode: ze.enum([
            "off",
            "signup_link",
            "create_and_link"
        ])
    }),
    mac_computer_use_sidecar_manifest: ze.strictObject({
        sidecarManifestUrl: ze.union([
            ze.literal(""),
            ze.string().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}\.json$/)
        ])
    }),
    windows_computer_use_sidecar_manifest: ze.strictObject({
        x64: ze.union([
            ze.literal(""),
            ze.string().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}-win32-x64\.json$/)
        ]),
        arm64: ze.union([
            ze.literal(""),
            ze.string().regex(/^https:\/\/downloads\.cursor\.com\/computer-use-sidecar\/releases\/[A-Za-z0-9][A-Za-z0-9._-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\/[0-9a-f]{40}-win32-arm64\.json$/)
        ])
    }),
    computer_use_mcp_instructions: ze.strictObject({
        darwin: ze.union([
            ze.string(),
            ze.strictObject({
                companion: ze.string(),
                remote: ze.string()
            })
        ]),
        win32: ze.string()
    }),
    change_monitor_enrollment: ze.object({
        enrolled: ze.boolean(),
        enableUI: ze.boolean(),
        orgs: ze.array(ze.string()).min(1)
    })
}, Bte = {
    cursor_private_inference_hard_stop: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            instructionsUrl: null
        }
    },
    mobile_iap_products: {
        client: !0,
        fallbackValues: {
            products: {
                "co.anysphere.cursor.pro.monthly": "pro",
                "co.anysphere.cursor.proplus.monthly": "pro_plus",
                "co.anysphere.cursor.ultra.monthly": "ultra",
                "co.anysphere.sand.pro.monthly": "pro",
                "co.anysphere.sand.proplus.monthly": "pro_plus",
                "co.anysphere.sand.ultra.monthly": "ultra"
            }
        }
    },
    codebase_protection_reporting_config: {
        client: !0,
        fallbackValues: {
            report_interval_ms: 18e5,
            jitter_fraction: .2
        }
    },
    agent_host_bridge_wait: {
        client: !0,
        fallbackValues: {
            initial_timeout_ms: 3e4,
            retry_timeout_ms: 5e3,
            max_attempts: 9
        }
    },
    agent_host_updater_timing: {
        client: !0,
        fallbackValues: {
            pollIntervalMs: null,
            requestIdleTimeoutMs: null
        }
    },
    composer_request_context_deadline: {
        client: !0,
        fallbackValues: {
            deadline_ms: 1500,
            max_stale_age_ms: 6e5
        }
    },
    sand_working_state_warming_config: {
        client: !0,
        fallbackValues: {
            maxClosureBytes: 1024 * 1024 * 1024,
            maxClosureBlobs: 5e4,
            putConcurrency: 16,
            parallelListing: !1,
            migrationAgentConcurrency: 8,
            migrationReadBatchBlobs: 32,
            migrationPutConcurrency: 8,
            migrationCopyConcurrency: 8,
            migrationExportCommandTimeoutMs: 15e4,
            migrationHostWindowMs: 10 * 6e4,
            migrationExportActivityTimeoutMs: 15 * 6e4
        }
    },
    grok_bot_temporal_harness_rollout: {
        client: !0,
        fallbackValues: {
            control: "legacy_gates",
            mode: "shadow",
            autoReviewEnforce: !1
        }
    },
    grok_bot_loop_detection: {
        client: !0,
        fallbackValues: {
            mode: "off"
        }
    },
    grok_bot_external_send_labeling_config: {
        client: !0,
        fallbackValues: {
            sampleRate: 0,
            connectors: [
                {
                    name: "slack",
                    hosts: [
                        "mcp.slack.com"
                    ],
                    sendTools: [
                        "slack_send_message",
                        "slack_schedule_message"
                    ]
                },
                {
                    name: "gmail",
                    hosts: [
                        "gmailmcp.googleapis.com",
                        "api.cursor.com"
                    ],
                    sendTools: [
                        "send_message",
                        "reply",
                        "forward",
                        "send_email",
                        "send_draft"
                    ]
                },
                {
                    name: "outlook",
                    hosts: [
                        "api.cursor.com/rest-mcp/outlook"
                    ],
                    sendTools: [
                        "send_mail",
                        "reply_to_mail_message",
                        "forward_mail_message",
                        "send_draft"
                    ]
                },
                {
                    name: "google_calendar",
                    hosts: [
                        "calendarmcp.googleapis.com",
                        "api.cursor.com"
                    ],
                    sendTools: [
                        "create_event",
                        "update_event"
                    ],
                    participants: {
                        args: [
                            "attendees",
                            "attendeeEmails",
                            "addedAttendees",
                            "addedAttendeeEmails",
                            "addAttendees"
                        ],
                        ownerArgs: [
                            "calendarId"
                        ]
                    }
                },
                {
                    name: "outlook_calendar",
                    hosts: [
                        "api.cursor.com"
                    ],
                    sendTools: [
                        "create_calendar_event",
                        "update_calendar_event"
                    ],
                    participants: {
                        args: [
                            "attendees"
                        ]
                    }
                },
                {
                    name: "google_drive_share",
                    hosts: [
                        "drivemcp.googleapis.com",
                        "api.cursor.com"
                    ],
                    sendTools: [
                        "share_file",
                        "google_drive_share_file"
                    ]
                },
                {
                    name: "teams",
                    hosts: [
                        "api.cursor.com"
                    ],
                    sendTools: [
                        "send_chat_message",
                        "send_channel_message",
                        "reply_to_channel_message"
                    ]
                }
            ],
            firstPartySendTools: [
                {
                    name: "phone_call",
                    toolName: "place_phone_call"
                },
                {
                    name: "imessage",
                    toolName: "SendIMessage"
                }
            ]
        }
    },
    grok_bot_system_prompt_override: {
        client: !0,
        fallbackValues: {
            basePrompt: ""
        }
    },
    remote_workspace_readiness_config: {
        client: !0,
        fallbackValues: {
            healthcheck_timeout_ms: 3e3,
            remote_extension_host_startup_grace_ms: 3e3
        }
    },
    ai_code_tracking_poll: {
        client: !0,
        fallbackValues: {
            interval_ms: 6e5
        }
    },
    solidjs_stack_trace_limit: {
        client: !0,
        fallbackValues: {
            stackTraceLimitFloor: 0
        }
    },
    glass_remote_connection_dormancy_config: {
        client: !0,
        fallbackValues: {
            windowIdleMinutesToSuspend: 20,
            hiddenAgentMinutesToSuspend: 0,
            suspendWhileWindowFocused: !1,
            maxDormantQueuedMessages: 1e3,
            maxDormantQueuedBytes: 4194304,
            hardMaxDormantQueuedMessages: 2e4,
            hardMaxDormantQueuedBytes: 67108864
        }
    },
    idle_extension_host_killer_config: {
        client: !0,
        fallbackValues: {
            idleMinutesToKillExtensionHost: 0,
            freeMemoryPercentageToKillExtensionHost: 0,
            killUserExtensionHost: !1
        }
    },
    marketplace_listing_config: {
        client: !0,
        fallbackValues: {
            rpcTimeoutMs: 15e3
        }
    },
    editor_bugbot_config: {
        client: !0,
        fallbackValues: {
            model: "claude-4-5-sonnet-20250929",
            iterations: 0,
            agentic_iterations: 1,
            agentic_model: "claude-4.5-haiku",
            deep_review_model: "",
            context_lines: 10
        }
    },
    client_speculative_summarization_config: {
        client: !0,
        fallbackValues: {
            tokenUsageThresholdPercentage: 70,
            tolerancePercentage: 5,
            inflightMaxAgeMinutes: 5,
            speculativeStreamTimeoutMinutes: 5
        }
    },
    rate_limited_reconnect_message_config: {
        client: !0,
        fallbackValues: {
            message: "Rate limited by model provider, retrying\u2026"
        }
    },
    new_conversation_ux_config: {
        client: !0,
        fallbackValues: {
            enable: !0,
            enabled_models: [],
            force_enable_on_all_models: !0,
            group_text: !0,
            group_thinking: !0,
            group_todos: !0,
            group_edits: !1,
            smooth_stream_enable: !1,
            grouped_text_max_length: 100,
            grouped_text_max_length_composer_family: 88,
            tool_summary_mode: "single_word",
            nest_tool_blocks: !1
        }
    },
    meta_agent_config: {
        client: !0,
        fallbackValues: {
            meta_parent_model: "claude-4.6-opus-high-fast",
            allow_subagent_followups: !0,
            enable_notes: !1
        }
    },
    task_card_tips: {
        client: !0,
        fallbackValues: {
            startup_tips: [
                {
                    id: "cloud-subagents",
                    text: "Use /in-cloud for cloud subagents"
                }
            ]
        }
    },
    product_tips_config: {
        client: !0,
        fallbackValues: {
            tips: [],
            config: {
                intervalMs: 8e3,
                minClientVersion: ""
            }
        }
    },
    composer_sandboxing_promo: {
        client: !0,
        fallbackValues: {
            version: 0
        }
    },
    playwright_log_configs: {
        client: !0,
        fallbackValues: {
            logSizeThreshold: 25e3,
            logPreviewLines: 25,
            logPreviewChars: 25e3
        }
    },
    privacy_mode_acknowledgement_onboarding: {
        client: !0,
        fallbackValues: {
            mode: "on"
        }
    },
    tools_concurrency_config: {
        client: !0,
        fallbackValues: {
            tools: {
                RIPGREP_RAW_SEARCH: {
                    ttl: 1e4,
                    maxConcurrent: 5
                },
                RIPGREP_SEARCH: {
                    ttl: 1e4,
                    maxConcurrent: 5
                }
            },
            defaultTtl: 1e4,
            defaultMaxConcurrent: 999999
        }
    },
    client_rg: {
        client: !0,
        fallbackValues: {
            num_threads: 4,
            fallback_num_threads: 4,
            use_batch_executor: !1,
            batch_executor_wait_ms: 50
        }
    },
    http2_ping_config: {
        client: !0,
        fallbackValues: {
            enabled: [],
            pingIdleConnection: null,
            pingIntervalMs: null,
            pingTimeoutMs: null,
            idleConnectionTimeoutMs: null
        }
    },
    http2_agent_connection_pool_config: {
        client: !0,
        fallbackValues: {
            poolSize: 4
        }
    },
    http1_keepalive_config: {
        client: !0,
        fallbackValues: {
            keepAliveInitialDelayMs: null
        }
    },
    nal_websocket_client_pool: {
        client: !0,
        fallbackValues: {
            maxConnections: 1
        }
    },
    ws_dark_durability_probe_config: {
        client: !0,
        fallbackValues: {
            idleHoldMs: 3e4,
            echoTimeoutMs: 5e3,
            concurrency: 4
        }
    },
    abort_controller_logging_config: {
        client: !0,
        fallbackValues: {
            sampling_rate: 1
        }
    },
    hooks_client_config: {
        client: !0,
        fallbackValues: {
            hooks_ready_timeout_ms: 2e3
        }
    },
    composer_hang_detection_config: {
        client: !0,
        fallbackValues: {
            thresholds_ms: [
                2e3,
                4e3,
                6e3,
                8e3,
                1e4,
                12e3,
                14e3,
                16e3,
                32e3
            ]
        }
    },
    composer_errors_without_button_support: {
        client: !0,
        fallbackValues: {
            error_type_denylist: []
        }
    },
    nal_stall_detector_timeout_config: {
        client: !0,
        fallbackValues: {
            advisoryTimeoutMs: 20 * 1e3,
            failTimeoutMs: 30 * 1e3
        }
    },
    nal_request_context_blob_transport_config: {
        client: !0,
        fallbackValues: {
            mode: "legacy",
            max_blob_bytes: 15 * 1024 * 1024,
            max_inline_dynamic_bytes: 1024 * 1024
        }
    },
    simulated_thinking_error_timeout: {
        client: !0,
        fallbackValues: {
            timeout_ms: 15 * 1e3
        }
    },
    agent_loop_phase_display: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            min_display_threshold_ms: 0
        }
    },
    in_app_ads_dev_override_config: {
        client: !0,
        fallbackValues: {
            ad_id_to_show: ""
        }
    },
    in_app_ads_quiet_period_config: {
        client: !0,
        fallbackValues: {
            quiet_period_ms: 6e5,
            first_launch_quiet_period_ms: 864e5
        }
    },
    environment_setup_resume_config: {
        client: !0,
        fallbackValues: {
            max_resume_age_ms: Zgr
        }
    },
    perf_monitor_control: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            subsample_polling_rate_sec: 0,
            sample_polling_rate_min: 0
        }
    },
    glass_reactivated_user_routing_config: {
        client: !0,
        fallbackValues: {
            user_routing_enabled: !1,
            inactive_days: Pld,
            ch_timeout_ms: 500,
            ch_cache_ttl_seconds: 86400,
            local_routing_enabled: !0
        }
    },
    retry_interceptor_config: {
        client: !0,
        fallbackValues: {
            retriableErrors: [
                {
                    code: "Unavailable"
                },
                {
                    code: "Internal"
                },
                {
                    code: "DeadlineExceeded"
                }
            ]
        }
    },
    retry_interceptor_params_config: {
        client: !0,
        fallbackValues: {
            maxRetries: null,
            baseDelayMs: null,
            maxDelayMs: null
        }
    },
    text_delta_pacing_config: {
        client: !0,
        fallbackValues: {
            targetCharsPerFrame: 0,
            maxLagFrames: 8,
            barrierMaxWaitMs: 0
        }
    },
    extension_monitor_control: {
        client: !0,
        fallbackValues: {
            local_enabled: !1,
            backend_reporting_enabled: !1,
            network_diagnostics_reporting_enabled: !1,
            subsample_polling_rate_sec: 0,
            sample_polling_rate_min: 0
        }
    },
    agent_memory_pressure_monitor: {
        client: !0,
        fallbackValues: {
            monitor_enabled: !1,
            low_memory_sustained_sec: 30,
            min_agent_process_age_sec: 0,
            low_memory_available_pct: 10,
            low_memory_available_abs_gb: 3,
            cpu_high_pct: 90,
            cpu_high_sustained_sec: 30,
            min_reported_cpu_pct: 5
        }
    },
    sand_process_metrics: {
        client: !0,
        fallbackValues: {
            local_enabled: !1,
            backend_reporting_enabled: !1,
            subsample_polling_rate_sec: 0,
            sample_polling_rate_min: 0
        }
    },
    sand_rpc_tracing: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            sample_ratio: .01
        }
    },
    gc_trace_control: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            drain_interval_sec: 120
        }
    },
    disable_infinite_cloud_agent_stream_retries: {
        client: !0,
        fallbackValues: {
            enabled: !1
        }
    },
    cloud_agent_shared_blob_cache: {
        client: !0,
        fallbackValues: {
            max_bytes: 128 * 1024 * 1024
        }
    },
    local_subagent_limits: {
        client: !0,
        fallbackValues: {
            maxRunning: 32
        }
    },
    sand_min_client_version: {
        client: !0,
        fallbackValues: {
            min_version: "",
            backend_min_version: "",
            novnc_port_token_min_version: "",
            hosted_mcp_oauth_callback_min_version: "",
            max_age_days: 14
        }
    },
    sand_mobile_version_support: {
        client: !0,
        fallbackValues: {
            min_recommended_build: 0,
            min_allowed_build: 0,
            update_url: ""
        }
    },
    sand_computer_use_playwright_config: {
        client: !0,
        fallbackValues: {
            modelId: "sand-cua",
            maxMode: !1,
            parameters: []
        }
    },
    grok_bot_conversation_size_limits: {
        client: !0,
        fallbackValues: {
            soft_limit_mb: 256,
            hard_limit_mb: 1024
        }
    },
    sand_share_bot_export_policy: {
        client: !0,
        fallbackValues: {
            policy: "team_only"
        }
    },
    sand_usage_breakdown: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            include_credits: !1
        }
    },
    sand_default_model: {
        client: !0,
        fallbackValues: {
            modelId: "default",
            maxMode: !1,
            parameters: []
        }
    },
    sand_automations_model: {
        client: !0,
        fallbackValues: {
            modelId: "default",
            maxMode: !1,
            parameters: []
        }
    },
    sand_feedback_prompt_config: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            sample_rate_denominator: 100,
            cooldown_seconds: 172800,
            signup_grace_seconds: 7200
        }
    },
    agent_store_sync_client_config: {
        client: !0,
        fallbackValues: {
            sync_debounce_ms: 5e3,
            idle_backoff_factor: 1,
            sync_idle_max_ms: 5e3,
            idle_quiesce_ms: 0,
            large_target_ttl_ms: 1800 * 1e3,
            sync_backoff_base_ms: 5e3,
            sync_backoff_max_ms: 6e4,
            project_sync_debounce_ms: 5e3,
            project_sync_idle_max_ms: 5e3,
            project_sync_backoff_base_ms: 5e3,
            project_sync_backoff_max_ms: 6e4,
            passive_retry_interval_ms: 5e3,
            passive_index_poll_interval_ms: 2e3,
            project_store_poll_interval_ms: 4e3,
            path_refresh_min_interval_ms: 1e3,
            project_notes_poll_interval_ms: 5e3,
            max_file_size_bytes: Xed,
            token_refresh_buffer_ms: 6e4,
            mint_terminal_denial_cache_ms: 30 * 6e4,
            skip_denied_mount_sync: 0,
            rpc_retry_max_attempts: 3,
            rpc_retry_base_delay_ms: 250,
            rpc_retry_max_delay_ms: 5e3,
            rpc_retry_multiplier: 2,
            token_refresh_jitter_ratio: .5,
            min_token_slack_ms: 5e3,
            mint_retry_policy_version: 1,
            mint_retry_max_attempts: 2,
            mint_retry_base_delay_ms: 250,
            mint_retry_max_delay_ms: 2e3,
            mint_retry_budget_ratio: .1,
            mint_retry_budget_floor: 3,
            mint_transient_negative_cache_base_ms: 5e3,
            mint_transient_negative_cache_max_ms: 12e4,
            mint_gate_open_threshold: 5,
            mint_gate_window_ms: 3e4,
            mint_gate_open_base_ms: 5e3,
            mint_gate_open_max_ms: 12e4,
            rpc_timeout_ms: 6e4,
            blob_idle_timeout_ms: 6e4,
            blob_connect_timeout_ms: 0,
            sync_round_timeout_ms: 3e5,
            sync_round_progress_timeout_ms: 0,
            sync_round_hard_cap_ms: 0,
            sync_round_unwind_timeout_ms: 3e4,
            lock_release_failure_threshold: 3,
            lock_release_failure_streak_threshold: 0,
            lock_release_failure_streak_passive_ms: 3e5,
            resume_gap_threshold_ms: 12e4,
            resume_detection_mode: "mono_gap",
            dirty_passive_stalled_threshold_ms: 12e4,
            s3_concurrency: 8,
            list_concurrency: 4,
            list_walk_concurrency: 4,
            hash_concurrency: 4,
            presign_concurrency: 4,
            multipart_upload_threshold_bytes: 64 * 1024 * 1024,
            multipart_part_size_bytes: 16 * 1024 * 1024,
            multipart_presign_window_size: 8,
            pull_presign_window_size: 500,
            multipart_complete_max_attempts: 3,
            multipart_max_restarts: 1,
            multipart_max_conflict_renames: 1,
            multipart_max_expiry_refreshes: 1,
            write_barrier_timeout_ms: 2e3,
            scoped_reserved_slots: 1,
            path_sync_request_poll_ms: 250,
            path_sync_request_wait_poll_ms: 50,
            exclusive_mutation_claim_poll_ms: 250,
            shared_scheduler: !1,
            periodic_coalesce_ms: 2e3,
            remote_version_enabled: !1,
            version_full_list_interval_ms: 1440 * 60 * 1e3,
            version_audit_sample_rate: 0,
            version_probe_enabled: !1,
            version_probe_max_entries: 50,
            stale_store_root_max_idle_ms: 10080 * 60 * 1e3,
            store_root_id_fence: !1,
            index_closed_invalidates_session: !1,
            store_eviction_mode: "legacy_sweep",
            store_eviction_quarantine_ms: 1440 * 60 * 1e3,
            store_eviction_max_roots_per_run: 4,
            store_eviction_max_hash_bytes_per_run: 256 * 1024 * 1024,
            store_eviction_mark_ttl_ms: 600 * 1e3,
            store_eviction_min_interval_ms: 360 * 60 * 1e3,
            tombstone_full_refresh_rounds: 2880,
            tombstone_full_refresh_interval_ms: 1440 * 60 * 1e3,
            tombstone_prune_slack_ms: 4320 * 60 * 1e3,
            local_stat_fast_path: "off",
            push_order: "scan",
            local_stat_fast_path_audit_rate: 1,
            local_stat_racy_margin_ms: 2e3,
            harness_recovery_policy: "recover",
            harness_recovery_start_jitter_ms: 3e4,
            harness_recovery_probe_base_ms: 3e5,
            harness_recovery_probe_max_ms: 36e5,
            harness_remembered_mounts_max: 16,
            mount_policy: null,
            surfaces: {}
        }
    },
    local_subscription_mint_cache_config: {
        client: !0,
        fallbackValues: {
            mint_refresh_slack_ms: 6e4,
            mint_failure_base_ms: 5e3,
            mint_failure_max_ms: 12e4,
            mint_failure_jitter: .2,
            mint_cache_max_conversations: 256
        }
    },
    gemini_video_attachment_config: {
        client: !0,
        fallbackValues: {
            maxBytes: 30 * 1024 * 1024,
            inlineMaxBytes: 15 * 1024 * 1024,
            signedUrlMaxBytes: 15 * 1024 * 1024,
            cloudMaxVideoAttachmentsPerRequest: 5,
            cloudMaxDocumentAttachmentsPerRequest: 5,
            localMaxVideoAttachmentsPerRequest: 5,
            localMaxTotalInlineVideoBytesPerRequest: 35 * 1024 * 1024
        }
    },
    agent_layout_migration: {
        client: !0,
        fallbackValues: {
            showSettings: !1,
            keepIsland: !1,
            sidebarLocation: "noop"
        }
    },
    default_diff_mode: {
        client: !0,
        fallbackValues: {
            default_diff_mode: "diffs"
        }
    },
    switch_mode_tool_config: {
        client: !0,
        fallbackValues: {
            enabledForNal: !1,
            enabledForOal: !1,
            fromModes: [],
            targetModes: []
        }
    },
    mcp_auth_status_copy_config: {
        client: !0,
        fallbackValues: {
            authToolDescription: "Authenticate this MCP server so its tools can be used. Call this tool through your MCP tool-calling interface when STATUS.md indicates this server needs authentication.",
            errorStatusMessage: "The MCP server errored. If this server is important for completing the task, concisely inform the user and ask them to check the MCP status in Cursor's Customize page > MCPs; otherwise continue with a different approach.",
            needsAuthStatusMessageWithAuthTool: 'The MCP server needs authentication. Authenticate it by calling the `{authToolName}` tool for server "{serverIdentifier}" through your MCP tool-calling interface using an empty arguments object. If this server is important for completing the task, authenticate it first; otherwise continue with a different approach.'
        }
    },
    mcp_reconnect_config: {
        client: !0,
        fallbackValues: {
            fastRetryBaseDelayMs: 5e3,
            fastRetryMaxDelayMs: 6e4,
            fastRetryMaxAttempts: 5,
            periodicRetryBaseDelayMs: 5 * 6e4,
            periodicRetryMaxDelayMs: 30 * 6e4,
            maxPeriodicCycles: null,
            focusRetryCooldownMs: 5 * 6e4,
            inlineReconnectCooldownMs: 5 * 6e4,
            oauthBackendRefreshHydrationPollIntervalMs: 500,
            streamableHttpSession404TombstoneThreshold: 5,
            healthProbeTimeoutMs: 1e4,
            toolCallBoundedTimeoutEnabled: !0,
            toolCallIdleTimeoutMs: 12e4,
            toolCallMaxTotalTimeoutMs: 60 * 6e4,
            degradedProbeDelayMs: 3e4,
            maxDegradedProbeFailures: 3,
            keepaliveProbeDelayMs: 5 * 6e4,
            keepaliveJitterMs: 3e4,
            stabilityThresholdMs: 3e4,
            stdioConnectFailuresAreNonRetryable: !0,
            retryNonRetryableOnWake: !1,
            nonRetryableWakeRetryCooldownMs: 5 * 6e4,
            retryNonRetryableAutomatically: !1,
            networkResumeReconnectEnabled: !1,
            networkResumeReconnectDebounceMs: 5e3,
            overrides: null
        }
    },
    mcp_oauth_sweep_config: {
        client: !0,
        fallbackValues: {
            oauthAttemptTtlMs: 36e5,
            refreshLockTtlMs: null,
            refreshLockMaxHoldMs: 12e4,
            registrationLockTtlMs: null
        }
    },
    mcp_oauth_refresh_policy: {
        client: !0,
        fallbackValues: {
            classifyBeforeWipe: !1
        }
    },
    mcp_oauth_loopback_redirect: {
        client: !0,
        fallbackValues: {
            enabled: !0,
            denylist: [],
            ipv4Hosts: []
        }
    },
    mcp_oauth_backend_redis_lock_config: {
        client: !0,
        fallbackValues: {
            operations: [
                "refresh"
            ],
            executorKinds: [
                "backendHttpMcp",
                "cloudAgent",
                "agentHost"
            ],
            providerAllowlist: [],
            fallbackMode: "fail_open",
            refreshLockTtlMs: 3e4,
            registrationLockTtlMs: 3e4,
            waitPollIntervalMs: 250,
            waitJitterMs: 100,
            maxWaitMs: 3e4
        }
    },
    sand_pressure_cpu_profiler_config: {
        client: !0,
        fallbackValues: {
            sustainedPressureWindowMs: 15e4,
            profileDurationMs: 15e3,
            minIntervalMs: 216e5,
            maxRetainedProfiles: 3
        }
    },
    sand_stream_deadline_config: {
        client: !0,
        fallbackValues: {
            firstTokenDeadlineMs: 15e4,
            idleDeadlineMs: 9e4
        }
    },
    inline_diff_performance_config: {
        client: !0,
        fallbackValues: {
            maxDecorations: 100
        }
    },
    tray_refresh_config: {
        client: !0,
        fallbackValues: {
            enableMainProcessCloudRefresh: !1,
            activeIntervalMs: 15e3,
            idleIntervalMs: 6e4,
            emptyIntervalMs: 3e5,
            engagementThrottleMs: 5e3,
            menuCap: 25,
            enablePoll: !0,
            enableEngagement: !0,
            enablePower: !0
        }
    },
    performance_events_config: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            flushIntervalMs: 3e4,
            sampleRate: 0,
            maxScriptsPerLoaf: 10,
            maxBatchBytes: 32 * 1024,
            loafThresholdMs: 1e3,
            maxEventsPerFlush: 20
        }
    },
    background_composer_list_limit: {
        client: !0,
        fallbackValues: {
            limit: 32
        }
    },
    switch_to_model_slug_config: {
        client: !0,
        fallbackValues: {
            modelSlug: "",
            modelIdWithParams: {
                modelId: "",
                params: []
            }
        }
    },
    debug_mode_ui_instructions_config: {
        client: !0,
        fallbackValues: {
            proceed_instructions: "Issue reproduced, please proceed",
            mark_fixed_instructions: "The issue has been fixed. Please clean up the instrumentation."
        }
    },
    user_intent_config: {
        client: !0,
        fallbackValues: {
            maxChatsToRead: 100,
            maxProjectsToGroup: 5,
            model: "claude-4.5-opus-high-thinking",
            promptTemplate: `You are analyzing conversation transcripts to identify repeated user behaviors.

## Transcript Location
Transcripts are stored at: {{agentTranscriptsPath}}

## Transcript Format
Each '.txt' file is a human-readable conversation transcript with this structure:
- 'user:' sections contain user messages (often wrapped in '<user_query>' tags)
- 'assistant:' sections contain assistant responses
- '[Tool call]' blocks show which tools were invoked
- '[Tool result]' blocks show tool outputs

Files can be large. Focus on extracting the '<user_query>' sections which contain the actual user requests. Do NOT try to read the entire file contents because it will pollute your context.

## How to Read Transcripts
1. Use Glob to list files: "{{agentTranscriptsPath}}/*.txt"
2. For each file, extract just the '<user_query>' blocks - these show what users asked for
3. You can use Grep to search for '<user_query>' patterns across files

## Task
Analyze the {{maxChatsToRead}} most recent conversations (by file modification time). Be thorough and do not bias towards recency when analyzing conversations. Ignore trivial conversations and conversations where nothing concrete happened.

Your goal is to understand how the user interacts with the agent. Focus especially on the corrections that the user makes repeatedly. Focus on common terminal commands/workflows the user instructs the agent to do, changes, and other very stable patterns.

## Evidence Standards
When making claims about what the agent SHOULD or SHOULD NOT do, only cite conversations where:
- The user explicitly corrected the agent for doing something wrong
- The user undid or rejected an agent action
- The user gave an explicit instruction ('don\\'t do X', 'always do Y')

Do NOT infer 'don\\'t do X' from:
- The user asking a question about X (e.g., 'should we add tests?' does not mean 'don\\'t add tests proactively')
- The user doing X themselves (doesn't mean the agent shouldn't)
- Absence of the agent doing X

For each claim, ask: 'Is there a conversation where the user pushed back on the agent for doing this?' If not, don't include it as a guideline. For each piece of information you discern, you must cite 4 conversations. For each citation, verify that the conversation actually backs up your claim. Never include direct quotes from user messages; summarize at a high level.

These are the sections to cover. Do not overlap these with existing user and project rules; if there is overlap or conflict always go with the existing rules.

- Developer profile: How does the user interact with the agent. Focus on how much autonomy they like to give the agent vs. how much they would like to oversee the changes the agent is making. What is their workflow for getting tasks done. What kind of tasks do they often work on. Verify across many conversations, and do not extrapolate too hard.
- Frequented areas of the codebase: Parts of the codebase the user primarily works in, and what kinds of tasks correspond to each part of the codebase.
- Important terminal commands: Terminal commands/workflows the user runs repeatedly that are unique to the project/user workflow, and when they should be used. Focus on test, lint, and build commands. Do not include git commands.

Do not write any files in this step. You will be asked in a follow-up message to write the final user profile to disk.`,
            secondStepPromptTemplate: `Turn your analysis into a concise 'index.md' markdown file that will be shown to all agents in the future.

Write the file contents to: {{userIntentDirPath}}
(This is a temporary file path and will be atomically moved to {{finalUserIntentDirPath}}.)

Requirements:
- Do not cite user messages or transcripts directly (no quotes)
- Avoid overly specific task details; focus on stable patterns and preferences
- Keep it reasonably short
- For each guideline/claim, include 4 conversation citations and verify that each citation supports the claim`
        }
    },
    browser_default_url_config: {
        client: !0,
        fallbackValues: {
            defaultUrl: "https://cursor.com"
        }
    },
    glass_per_app_tabs_config: {
        client: !0,
        fallbackValues: {
            agentTabSelectionTTL: 3e4
        }
    },
    glass_tiling_config: {
        client: !0,
        fallbackValues: {
            showDraftsInSidebar: !1
        }
    },
    glass_fsd_launch_pill_config: {
        client: !0,
        fallbackValues: {
            pillLabel: "Autopilot PR",
            tooltip: "Fix CI, conflicts, and comments with full self driving",
            dropdownAriaLabel: "Autopilot PR runtime",
            cloudOptionLabel: "Run in Cloud",
            localOptionLabel: "Run locally in a Worktree",
            fixCiPillSingleLabel: "Debug CI Failure",
            fixCiPillPluralLabelTemplate: "Debug {count} CI Failures",
            fixCiPillLoadingLabel: "Debugging CI",
            fixCiPillLoadingProgressLabel: "Debugging CI",
            fsdFixCiPillSingleLabel: "Fix CI with FSD",
            fsdFixCiPillPluralLabelTemplate: "Fix {count} CI Failures with FSD",
            fsdFixCiPillLoadingLabel: "Fixing CI with FSD",
            fsdFixCiPillLoadingProgressLabel: "Fixing CI with FSD"
        }
    },
    grok_bot_contextual_banner_copy: {
        client: !0,
        fallbackValues: {
            title: "Grok Bot can do this for you",
            description: "An AI teammate that works in your tools and comes back with finished work.",
            downloadCtaLabel: "Download",
            downloadUrl: "https://cursor.com/download/bot",
            openCtaLabel: "Open Grok Bot",
            openUrl: "grokbot://"
        }
    },
    glass_btw_side_question_prompt_config: {
        client: !0,
        fallbackValues: {
            promptTemplate: [
                "You are answering a single ephemeral question about the user's current work. Use the provided conversation as context and respond directly in one answer. Do not ask follow-up questions, do not request mode switches, and do not mention tool limitations unless absolutely necessary.",
                "If the conversation does not contain enough to answer, say so briefly.",
                "",
                "{{question}}"
            ].join(`
`)
        }
    },
    glass_loaded_agent_lru_cap: {
        client: !0,
        fallbackValues: {
            max_loaded_agents: 5
        }
    },
    composer_hidden_bubble_eviction: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            keep_recent_hidden: 1
        }
    },
    glass_large_file_gate_config: {
        client: !0,
        fallbackValues: {
            code_gate_bytes: 10485760
        }
    },
    glass_workspace_lifecycle_metrics: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            sweep_interval_ms: 6e4,
            retained_after_close_threshold_ms: 45e3
        }
    },
    glass_pr_operations_polling_config: {
        client: !0,
        fallbackValues: {
            prChecksPollIntervalMs: 3e4,
            prChecksPollMaxBackoffMs: 18e4,
            prChecksErrorBackoffMultiplier: 1.5,
            prChecksCacheTtlSeconds: 900,
            scmPrMetadataCacheTtlSeconds: 3600,
            scmPrDetailedStatusCacheTtlSeconds: 60,
            scmPrForBranchCacheTtlWhenPrsSeconds: 60,
            scmPrForBranchCacheTtlWhenEmptySeconds: 10,
            scmPrCodeownersCacheTtlSeconds: 300,
            scmPrCommitsCacheTtlSeconds: 300,
            scmPrTimelineEventsCacheTtlSeconds: 300,
            scmPrDiscussionsCacheTtlSeconds: 300,
            scmPrCheckLogExcerptOkTtlSeconds: 120,
            scmPrCheckLogExcerptNegativeTtlSeconds: 30,
            detailedPrStatusChecksScopedAuthBreakerTtlSeconds: 900,
            scmGitlabEmojiReactionCacheTtlSeconds: 1800,
            localAgentPrHeaderBatchPollIntervalMs: 3e4,
            localAgentPrStatePollIntervalMs: 10 * 6e4,
            localAgentPrBurstBumpOffsetsMs: [
                3e3,
                6e3,
                9e3,
                15e3,
                2e4,
                25e3,
                3e4
            ],
            cloudAgentPrStatePollIntervalMs: 6e4,
            cloudAgentPrBurstBumpOffsetsMs: [
                3e3,
                6e3,
                9e3,
                15e3,
                2e4,
                25e3,
                3e4
            ],
            cloudAgentPrStatePollMaxBackoffMs: 3e5,
            cloudAgentPrErrorBackoffMultiplier: 1.5
        }
    },
    cloud_agent_stream_reattach: {
        client: !0,
        fallbackValues: {
            enabled: !0,
            rehydrateAfterMs: 12e4
        }
    },
    cloud_agent_stream_conversation_turn_window: {
        client: !0,
        fallbackValues: {
            maxTurns: null
        }
    },
    tool_limits_config: {
        client: !0,
        fallbackValues: {
            readFilesToolMaxFileSizeInBytes: 2e6,
            editFileToolMaxFileSizeInChars: 15e4,
            fileSearchToolMaxResults: 10,
            listDirV2ClientSideCharacterBudget: 1e3,
            readFileV2ToolMaxFileSizeInBytes: 2e8,
            composerDiffMaxComputationTimeMs: 2e3
        }
    },
    update_prompt_config: {
        client: !0,
        fallbackValues: {
            min_hours_between_prompts: 48,
            max_prompts_per_version: 3,
            max_prompts_per_day: 1,
            snooze_duration_hours: 72
        }
    },
    internal_release_track_override: {
        client: !0,
        fallbackValues: {
            releaseTrack: "",
            statsigUrl: "",
            unlockInternalTracks: !1
        }
    },
    sand_internal_release_track_override: {
        client: !0,
        fallbackValues: {
            releaseTrack: "",
            unlockInternalTracks: !1
        }
    },
    sand_host_bundle_channel: {
        client: !0,
        fallbackValues: {
            channel: "",
            watchIntervalMs: null
        }
    },
    giant_json_stringify_config: {
        client: !0,
        fallbackValues: {
            sentry_threshold_bytes: 1e7,
            attach_content: !1
        }
    },
    giant_buffer_retention_config: {
        client: !0,
        fallbackValues: {
            allocation_threshold_bytes: 32 * 1024 * 1024,
            blob_url_threshold_bytes: 32 * 1024 * 1024,
            retention_age_ms: 5 * 6e4,
            sweep_interval_ms: 6e4
        }
    },
    giant_json_parse_config: {
        client: !0,
        fallbackValues: {
            sentry_threshold_bytes: 1e9
        }
    },
    giant_vsbuffer_decode_config: {
        client: !0,
        fallbackValues: {
            sentry_threshold_bytes: 2e7
        }
    },
    mcp_ipc_timeouts: {
        client: !0,
        fallbackValues: {
            metadata_timeout_ms: 1e4,
            lifecycle_timeout_ms: 1e4,
            dashboard_timeout_ms: 1e4,
            recovery_per_retry_timeout_ms: 1e4
        }
    },
    sentry_session_recording_config: {
        client: !0,
        fallbackValues: {
            replays_session_sample_rate: 0
        }
    },
    extension_signature_verification_bypass_list: {
        client: !0,
        fallbackValues: {
            extensionIds: [
                "nromanov.dotrush",
                "ms-python.python",
                "typescriptteam.native-preview",
                "typespec.typespec-vscode",
                "ms-toolsai.jupyter",
                "k3ndr1ckfu.tcl-language-support-for-vscode",
                "amiq.dvt"
            ],
            remoteVerificationMinVersion: "2.25.0"
        }
    },
    sandbox_default_network_allowlist: {
        client: !0,
        fallbackValues: {
            allowlist: []
        }
    },
    auto_spillover_ui_config: {
        client: !0,
        fallbackValues: m_t
    },
    glass_perf_vote_config: {
        client: !0,
        fallbackValues: Iet
    },
    portal_outage_alert: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            title: "",
            description: ""
        }
    },
    slack_mcp_client_id: {
        client: !0,
        fallbackValues: {
            clientId: "3660753192626.8903469228982"
        }
    },
    shopify_mcp_client_id: {
        client: !0,
        fallbackValues: {
            clientId: "2a457b21c946d5bc8d1675d1b3b8c2d6"
        }
    },
    file_watcher_metrics_config: {
        client: !0,
        fallbackValues: {
            flush_delay_ms: 3e4
        }
    },
    file_watcher_forwarded_storm_config: {
        client: !0,
        fallbackValues: {
            window_ms: 1e4,
            min_events: 2500,
            report_throttle_ms: 5 * 6e4,
            top_buckets: 8
        }
    },
    cloud_agent_list_stream_config: {
        client: !0,
        fallbackValues: {
            enabled_platforms: [],
            safety_poll_interval_ms: 6e4,
            inactivity_timeout_ms: 45e3,
            max_consecutive_failures: 5,
            reconnect_base_delay_ms: 1e3,
            reconnect_max_delay_ms: 6e4,
            reconcile_delay_ms: 1e3,
            use_list_page_tokens: !0,
            split_project_list: !1,
            exclude_archived_default: !1,
            projects_only_owner_lookup: !1,
            projects_only_owner_lookup_max_projects: 5e3,
            membership_poll_interval_ms: 0,
            membership_safety_poll_interval_ms: 0
        }
    },
    statsig_dummy_gauge_config: {
        client: !0,
        fallbackValues: {
            dummy: 0
        }
    },
    memory_monitor_user_toast_config: {
        client: !0,
        fallbackValues: {
            heap_percent: 80
        }
    },
    cpu_monitor_config: {
        client: !0,
        fallbackValues: {
            total_cpu_percent: 250,
            process_cpu_percent: 95,
            sustained_seconds: 60,
            check_interval_seconds: 15,
            cooldown_seconds: 1800,
            include_system_processes: !0
        }
    },
    memory_pressure_profiling_config: {
        client: !0,
        fallbackValues: {
            trigger_heap_percent: 70,
            duration_seconds: 30,
            sampling_interval_bytes: 4096,
            cooldown_seconds: 300
        }
    },
    webview_inventory_config: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            metrics_interval_seconds: 30,
            sample_interval_minutes: 5
        }
    },
    memory_monitor_config: {
        client: !0,
        fallbackValues: {
            base_threshold_mb: 1536,
            critical_offset_mb: 512,
            show_status_entry: !1,
            show_internal_warning_popup: !1,
            show_user_toast: !0,
            user_toast_heap_percent: 80,
            emit_heap_usage_metric: !1,
            emergency_profiling_enabled: !0,
            emergency_profiling_trigger_heap_percent: 70,
            emergency_profiling_duration_seconds: 30,
            emergency_profiling_sampling_interval_bytes: 4096,
            emergency_profiling_cooldown_seconds: 300
        }
    },
    plugin_onboarding_by_job_role: {
        client: !0,
        fallbackValues: {
            byJobRole: {},
            recommendedPluginNamesByJobRole: {}
        }
    },
    leaked_disposables_tracker: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            reportIntervalMs: 6e4
        }
    },
    gc_disposable_leak_reporting: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            sessionSampleRate: 0
        }
    },
    solidjs_memo_audit_config: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            sampleRate: 1,
            maxEventsPerFlush: 5e4,
            reportIntervalMs: 6e4,
            deepProbe: !1,
            deepProbeSampleRate: .01,
            deepProbeMaxBytes: 16384,
            stackAttribution: !1,
            stackCreationSampleRate: .02,
            stackRedundantThreshold: 2,
            maxTrackedCreationStacks: 500,
            maxStackReportsPerSession: 10,
            maxStackBytes: 4e3
        }
    },
    solidjs_listener_stacks_config: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            sampleRate: 1,
            observerThreshold: 2e3,
            maxTrackedSources: 500,
            maxReportsPerSession: 10,
            maxStackBytes: 4e3,
            totalObserverThreshold: 0,
            totalTriggeredSourceFloor: 200,
            totalTriggeredMaxReports: 20
        }
    },
    shell_exec_output_backpressure_config: {
        client: !0,
        fallbackValues: {
            outputSuppressionWindowMs: 6e4,
            outputSuppressionThresholdCharsPerSecond: 64 * 1024,
            outputSuppressionMinChars: 256 * 1024,
            outputLimiterFlushIntervalMs: 50,
            outputLimiterMaxBufferedBytes: 256 * 1024,
            extHostMinBatchIntervalMs: 50,
            extHostMaxBatchIntervalMs: 500,
            extHostBytesPerIntervalStep: 1e4
        }
    },
    canvas_prompt_text_config: {
        client: !0,
        fallbackValues: {
            skillDescription: "A Cursor Canvas is a live React app that the user can open beside the chat. You MUST use a canvas when the agent produces a standalone analytical artifact \u2014 quantitative analyses, billing investigations, security audits, architecture reviews, data-heavy content, timelines, charts, tables, interactive explorations, repeatable tools, or any response that benefits from visual layout. Especially prefer a canvas when presenting results from MCP tools (Datadog, Databricks, Linear, Sentry, Slack, etc.) where the data is the deliverable \u2014 render it in a rich canvas rather than dumping it into a markdown table or code block. If you catch yourself about to write a markdown table, stop and use a canvas instead. You MUST also read this skill whenever you create, edit, or debug any .canvas.tsx file.",
            errorFixPromptTemplate: [
                "The canvas at `{canvasPath}` has the following error:",
                "",
                '"""',
                "{errorMessage}",
                '"""',
                "",
                "Check if the canvas SDK has changed since this canvas was created.",
                "Update the canvas to use the latest SDK components according to the supplied documentation in the canvas skill."
            ].join(`
`),
            welcomePageEnabled: !0,
            marketplaceCategoryKey: "canvas-featured",
            marketplaceMaxCards: 4
        }
    },
    glass_ftux_first_action_config: {
        client: !0,
        fallbackValues: {
            byJobRole: {}
        }
    },
    shutdown_hang_watchdog_config: {
        client: !0,
        fallbackValues: {
            per_joiner_warn_ms: 2e3,
            fire_on_will_shutdown_total_ms: 3e3,
            process_exit_total_ms: 5e3
        }
    },
    update_diagnostics: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            restart_time_threshold_seconds: 30,
            attach_ship_it_log: !0,
            max_attachment_bytes: 5e6
        }
    },
    startup_diagnostics: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            timer_name: "ellapsedLoadMainBundle",
            threshold_ms: 3e4
        }
    },
    renderer_ping_config: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            ping_interval_ms: 5e3,
            block_threshold_ms: 15e3,
            collect_stack_traces: !0,
            report_rpc_drain: !1
        }
    },
    main_watcher_stall_probe_config: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            flush_threshold_ms: 250,
            anchor_interval_ms: 1e3,
            anchor_lag_ms: 500,
            cooldown_ms: 6e4,
            session_cap: 10
        }
    },
    editor_input_latency_metrics_config: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            sample_rate: .01,
            window_duration_ms: 6e4
        }
    },
    editor_tokenization_metrics_config: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            sample_rate: .01,
            time_limit_ms: 500
        }
    },
    ripgrep_invocation_monitor_config: {
        client: !0,
        fallbackValues: {
            window_ms: 1e4,
            threshold: 50,
            max_records: 100,
            cooldown_ms: 3e5,
            report_to_sentry: !0,
            report_initialize_caches: !1
        }
    },
    grep_fallback_monitor_config: {
        client: !0,
        fallbackValues: {
            window_ms: 6e4,
            min_samples: 20,
            fallback_ratio_threshold: .5,
            cooldown_ms: 3e5,
            report_to_sentry: !0
        }
    },
    instant_grep_indexing_config: {
        client: !0,
        fallbackValues: {
            max_in_memory_documents: null
        }
    },
    git_diff_reply_limit_config: {
        client: !0,
        fallbackValues: {
            enabled: !0,
            max_reply_bytes: 31457280
        }
    },
    renderer_slow_interaction_sentry_config: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            threshold_ms: 1e3,
            commit_attribution: !1
        }
    },
    glass_fps_monitor_config: {
        client: !0,
        fallbackValues: {
            enabled: !1,
            min_fps: 30,
            max_drops_per_interval: 3,
            interval_sec: 60,
            baseline_interval_sec: null,
            baseline_sample_rate: null
        }
    },
    xai_team_link_create_mode: {
        client: !0,
        fallbackValues: {
            mode: "off"
        }
    },
    mac_computer_use_sidecar_manifest: {
        client: !0,
        fallbackValues: {
            sidecarManifestUrl: ""
        }
    },
    windows_computer_use_sidecar_manifest: {
        client: !0,
        fallbackValues: {
            x64: "",
            arm64: ""
        }
    },
    computer_use_mcp_instructions: {
        client: !0,
        fallbackValues: {
            darwin: {
                companion: "",
                remote: ""
            },
            win32: ""
        }
    },
    change_monitor_enrollment: {
        client: !0,
        fallbackValues: {
            enrolled: !1,
            enableUI: !1,
            orgs: [
                "*"
            ]
        }
    }
}, jhn = Object.keys(Bte), gPo = {
    model_picker_experiments: {
        client: !0,
        fallbackValues: {
            promote_first_party_variant: "control",
            effort_first_variant: "control",
            effort_first_compact_model_ids: [
                "grok-4.5",
                "grok-4.6"
            ]
        },
        parseValue: {
            promote_first_party_variant: xS([
                "control",
                "grok_primary",
                "pinned_selection",
                "grouped_auto_expand"
            ]),
            effort_first_variant: xS([
                "control",
                "treatment"
            ]),
            effort_first_compact_model_ids: FTy
        }
    }
};

}
