export const hookEvents = {
  RUN_START: 'RUN_START',
  RUN_FINISH: 'RUN_FINISH',
  INSTANCE_START: 'INSTANCE_START',
  INSTANCE_FINISH: 'INSTANCE_FINISH',
};

export enum hookType {
  GITHUB_STATUS_HOOK = 'GITHUB_STATUS_HOOK',
  GENERIC_HOOK = 'GENERIC_HOOK',
  SLACK_HOOK = 'SLACK_HOOK',
}