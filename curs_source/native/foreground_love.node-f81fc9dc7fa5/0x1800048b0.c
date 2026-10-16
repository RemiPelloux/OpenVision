
/* Address: 0x1800048b0; Evidence: ev_14fb65c11a9b199aebf4828732570a46255871dafc9c1c430e770e2a6a99ebb4 */

void FUN_1800048b0(undefined8 *param_1)

{
  if (*(char *)(param_1 + 1) != '\0') {
    thunk_FUN_180006b50((LPVOID)*param_1);
  }
  *(undefined1 *)(param_1 + 1) = 0;
  *param_1 = 0;
  return;
}

