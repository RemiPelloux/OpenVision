function FA(e,t){const r=Ft.now(),n=a(({timestamp:o})=>{const i=o-r;i>=t&&(vn(n),e(i-t))},"checkElapsed");return Ze.setup(n,!0),()=>vn(n)}
