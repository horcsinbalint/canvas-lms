/*
 * Copyright (C) 2023 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

const featureBundles: {
  [bundle: string]: () => Promise<unknown>
} = {
  // TODO: move these into ui/boot/initializers/router.tsx
  account_admin_tools: () => import('./features/account_admin_tools/index'),
  account_calendar_settings: () => import('./features/account_calendar_settings/index'),
  account_course_user_search: () => import('./features/account_course_user_search/index'),
  account_grading_standards: () => import('./features/account_grading_standards/index'),
  account_notification_settings: () => import('./features/account_notification_settings/index'),
  account_search: () => import('./features/account_search/index'),
  account_settings: () => import('./features/account_settings/index'),
  account_statistics: () => import('./features/account_statistics/index'),
  admin_split: () => import('./features/admin_split/index'),
  alerts: () => import('./features/alerts/index'),
  all_courses: () => import('./features/all_courses/index'),
  analytics_hub: () => import('./features/analytics_hub/index'),
  announcements_on_home_page: () => import('./features/announcements_on_home_page/index'),
  announcements: () => import('./features/announcements/index'),
  assignment_edit: () => import('./features/assignment_edit/index'),
  assignment_grade_summary: () => import('./features/assignment_grade_summary/index'),
  assignment_index: () => import('./features/assignment_index/index'),
  assignment_show: () => import('./features/assignment_show/index'),
  assignments_peer_reviews: () => import('./features/assignments_peer_reviews/index'),
  assignments_show_student: () => import('./features/assignments_show_student/index'),
  assignments_show_teacher: () => import('./features/assignments_show_teacher/index'),
  authentication_providers: () => import('./features/authentication_providers/index'),
  available_pronouns_list: () => import('./features/available_pronouns_list/index'),
  blueprint_course_child: () => import('./features/blueprint_course_child/index'),
  blueprint_course_master: () => import('./features/blueprint_course_master/index'),
  block_editor: () => import('./features/block_editor/index'),
  brand_configs: () => import('./features/brand_configs/index'),
  calendar_appointment_group_edit: () => import('./features/calendar_appointment_group_edit/index'),
  calendar: () => import('./features/calendar/index'),
  change_password: () => import('./features/change_password/index'),
  choose_mastery_path: () => import('./features/choose_mastery_path/index'),
  collaborations: () => import('./features/collaborations/index'),
  conferences: () => import('./features/conferences/index'),
  confetti: () => import('./features/confetti/index'),
  confirm_email: () => import('./features/confirm_email/index'),
  content_exports: () => import('./features/content_exports/index'),
  content_migrations: () => import('./features/content_migrations/index'),
  content_notices: () => import('./features/content_notices/index'),
  content_shares: () => import('./features/content_shares/index'),
  context_media_object_inline: () => import('./features/context_media_object_inline/index'),
  context_module_progressions: () => import('./features/context_module_progressions/index'),
  context_modules_publish_icon: () => import('./features/context_modules_publish_icon/index'),
  context_modules_publish_menu: () => import('./features/context_modules_publish_menu/index'),
  context_modules: () => import('./features/context_modules/index'),
  context_roster_usage: () => import('./features/context_roster_usage/index'),
  context_roster_user_services: () => import('./features/context_roster_user_services/index'),
  context_roster_user: () => import('./features/context_roster_user/index'),
  context_undelete_item: () => import('./features/context_undelete_item/index'),
  copy_course: () => import('./features/copy_course/index'),
  course_grading_standards: () => import('./features/course_grading_standards/index'),
  course_link_validator: () => import('./features/course_link_validator/index'),
  course_list: () => import('./features/course_list/index'),
  course_notification_settings: () => import('./features/course_notification_settings/index'),
  course_paces: () => import('./features/course_paces/index'),
  course_people: () => import('./features/course_people/index'),
  course_show_secondary: () => import('./features/course_show_secondary/index'),
  course_settings: () => import('./features/course_settings/index'),
  course_show: () => import('./features/course_show/index'),
  course_statistics: () => import('./features/course_statistics/index'),
  course_wizard: () => import('./features/course_wizard/index'),
  course: () => import('./features/course/index'),
  courses: () => import('./features/courses/index'),
  dashboard: () => import('./features/dashboard/index'),
  deep_linking_response: () => import('./features/deep_linking_response/index'),
  developer_keys_v2: () => import('./features/developer_keys_v2/index'),
  lti_registrations: () => import('./features/lti_registrations/index'),
  discussion_topic_edit_v2: () => import('./features/discussion_topic_edit_v2/index'),
  discussion_topic_edit: () => import('./features/discussion_topic_edit/index'),
  discussion_topic: () => import('./features/discussion_topic/index'),
  discussion_topics_index: () => import('./features/discussion_topics_index/index'),
  discussion_topics_post: () => import('./features/discussion_topics_post/index'),
  edit_calendar_event: () => import('./features/edit_calendar_event/index'),
  edit_rubric: () => import('./features/edit_rubric/index'),
  enhanced_individual_gradebook: () => import('./features/enhanced_individual_gradebook/index'),
  eportfolio: () => import('./features/eportfolio/index'),
  eportfolio_moderation: () => import('./features/eportfolio_moderation/index'),
  eportfolios_wizard_box: () => import('./features/eportfolios_wizard_box/index'),
  epub_exports: () => import('./features/epub_exports/index'),
  error_form: () => import('./features/error_form/index'),
  external_apps: () => import('./features/external_apps/index'),
  external_content_cancel: () => import('./features/external_content_cancel/index'),
  external_content_success: () => import('./features/external_content_success/index'),
  external_tool_redirect: () => import('./features/external_tool_redirect/index'),
  external_tools_show: () => import('./features/external_tools_show/index'),
  file_not_found: () => import('./features/file_not_found/index'),
  file_preview: () => import('./features/file_preview/index'),
  file_show: () => import('./features/file_show/index'),
  file: () => import('./features/file/index'),
  files: () => import('./features/files/index'),
  grade_summary: () => import('./features/grade_summary/index'),
  gradebook_history: () => import('./features/gradebook_history/index'),
  gradebook_uploads: () => import('./features/gradebook_uploads/index'),
  gradebook: () => import('./features/gradebook/index'),
  graphiql: () => import('./features/graphiql/index'),
  group_submission_reminder: () => import('./features/group_submission_reminder/index'),
  groups: () => import('./features/groups/index'),
  inbox: () => import('./features/inbox/index'),
  inlined_preview: () => import('./features/inlined_preview/index'),
  inst_fs_service_worker: () => import('./features/inst_fs_service_worker/index'),
  job_stats: () => import('./features/job_stats/index'),
  jobs_v2: () => import('./features/jobs_v2/index'),
  jobs: () => import('./features/jobs/index'),
  k5_course: () => import('./features/k5_course/index'),
  k5_dashboard: () => import('./features/k5_dashboard/index'),
  k5_theme: () => import('./features/k5_theme/index'),
  ldap_cert_upload: () => import('./features/ldap_cert_upload/index'),
  ldap_settings_test: () => import('./features/ldap_settings_test/index'),
  learning_mastery_v2: () => import('./features/learning_mastery_v2/index'),
  learning_mastery: () => import('./features/learning_mastery/index'),
  learning_outcomes: () => import('./features/learning_outcomes/index'),
  license_help: () => import('./features/license_help/index'),
  link_enrollment: () => import('./features/link_enrollment/index'),
  locale: () => import('./features/locale/index'),
  login: () => import('./features/login/index'),
  lti_collaborations: () => import('./features/lti_collaborations/index'),
  manage_avatars: () => import('./features/manage_avatars/index'),
  manage_groups: () => import('./features/manage_groups/index'),
  media_player_iframe_content: () => import('./features/media_player_iframe_content/index'),
  messages: () => import('./features/messages/index'),
  mobile_login: () => import('./features/mobile_login/index'),
  moderate_quiz: () => import('./features/moderate_quiz/index'),
  module_dnd: () => import('./features/module_dnd/index'),
  module_sequence_footer: () => import('./features/module_sequence_footer/index'),
  module_student_view_peer_reviews: () =>
    import('./features/module_student_view_peer_reviews/index'),
  nav_tourpoints: () => import('./features/nav_tourpoints/index'),
  navigation_header: () => import('./features/navigation_header/index'),
  new_user_tutorial: () => import('./features/new_user_tutorial/index'),
  not_found_index: () => import('./features/not_found_index/index'),
  oauth2_confirm: () => import('./features/oauth2_confirm/index'),
  otp_login: () => import('./features/otp_login/index'),
  outcome_alignment_v2: () => import('./features/outcome_alignment_v2/index'),
  outcome_alignments: () => import('./features/outcome_alignments/index'),
  outcome_management: () => import('./features/outcome_management/index'),
  page_views: () => import('./features/page_views/index'),
  password_complexity_configuration: () =>
    import('./features/password_complexity_configuration/index'),
  past_global_alert: () => import('./features/past_global_alert/index'),
  past_global_announcements: () => import('./features/past_global_announcements/index'),
  permissions: () => import('./features/permissions/index'),
  platform_speedgrader: () => import('./features/speed_grader/index'),
  plugins: () => import('./features/plugins/index'),
  prerequisites_lookup: () => import('./features/prerequisites_lookup/index'),
  profile_show: () => import('./features/profile_show/index'),
  profile: () => import('./features/profile/index'),
  progress_pill: () => import('./features/progress_pill/index'),
  qr_mobile_login: () => import('./features/qr_mobile_login/index'),
  question_bank: () => import('./features/question_bank/index'),
  question_banks: () => import('./features/question_banks/index'),
  quiz_history: () => import('./features/quiz_history/index'),
  quiz_log_auditing: () => import('./features/quiz_log_auditing/index'),
  quiz_migration_alerts: () => import('./features/quiz_migration_alerts/index'),
  quiz_show: () => import('./features/quiz_show/index'),
  quiz_statistics: () => import('./features/quiz_statistics/index'),
  quiz_submission: () => import('./features/quiz_submission/index'),
  quizzes_access_code: () => import('./features/quizzes_access_code/index'),
  quizzes_index: () => import('./features/quizzes_index/index'),
  quizzes: () => import('./features/quizzes/index'),
  registration_confirmation: () => import('./features/registration_confirmation/index'),
  registration: () => import('./features/registration/index'),
  release_notes_edit: () => import('./features/release_notes_edit/index'),
  roster: () => import('./features/roster/index'),
  rubric_assessment: () => import('./features/rubric_assessment/index'),
  rubrics_index: () => import('./features/rubrics_index/index'),
  rubrics_show: () => import('./features/rubrics_show/index'),
  screenreader_gradebook: () => import('./features/screenreader_gradebook/index'),
  search: () => import('./features/search/index'),
  section: () => import('./features/section/index'),
  select_content_dialog: () => import('./features/select_content_dialog/index'),
  self_enrollment: () => import('./features/self_enrollment/index'),
  settings_sidebar: () => import('./features/settings_sidebar/index'),
  sis_import: () => import('./features/sis_import/index'),
  slickgrid: () => import('./features/slickgrid/index'),
  speed_grader: () => import('./features/speed_grader/index'),
  student_group_dialog: () => import('./features/student_group_dialog/index'),
  sub_accounts: () => import('./features/sub_accounts/index'),
  submission_download: () => import('./features/submission_download/index'),
  submissions_show_preview_media: () => import('./features/submissions_show_preview_media/index'),
  submissions_show_preview_text: () => import('./features/submissions_show_preview_text/index'),
  submissions_show_preview_upload: () => import('./features/submissions_show_preview_upload/index'),
  submissions: () => import('./features/submissions/index'),
  submit_assignment: () => import('./features/submit_assignment/index'),
  syllabus: () => import('./features/syllabus/index'),
  take_quiz: () => import('./features/take_quiz/index'),
  teacher_activity_report: () => import('./features/teacher_activity_report/index'),
  terms_index: () => import('./features/terms_index/index'),
  terms_of_service_modal: () => import('./features/terms_of_service_modal/index'),
  copy_warnings_modal: () => import('./features/copy_warnings_modal/index'),
  terms_of_use: () => import('./features/terms_of_use/index'),
  theme_editor: () => import('./features/theme_editor/index'),
  theme_preview: () => import('./features/theme_preview/index'),
  top_navigation_tools: () => import('./features/top_navigation_tools/index'),
  user_grades: () => import('./features/user_grades/index'),
  user_lists: () => import('./features/user_lists/index'),
  user_logins: () => import('./features/user_logins/index'),
  user_name: () => import('./features/user_name/index'),
  user_notes: () => import('./features/user_notes/index'),
  user_notes_deprecation: () => import('./features/user_notes_deprecation/index'),
  user_observees: () => import('./features/user_observees/index'),
  user_outcome_results: () => import('./features/user_outcome_results/index'),
  user: () => import('./features/user/index'),
  users_admin_merge: () => import('./features/users_admin_merge/index'),
  users_index: () => import('./features/users_index/index'),
  visibility_help: () => import('./features/visibility_help/index'),
  webzip_export: () => import('./features/webzip_export/index'),
  wiki_page_edit: () => import('./features/wiki_page_edit/index'),
  wiki_page_index: () => import('./features/wiki_page_index/index'),
  wiki_page_revisions: () => import('./features/wiki_page_revisions/index'),
  wiki_page_show: () => import('./features/wiki_page_show/index'),
}

export default featureBundles
