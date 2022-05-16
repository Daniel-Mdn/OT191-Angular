import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

import { of, throwError } from "rxjs";
import { map, tap } from "rxjs/operators";

import { User } from "src/app/core/models/user.model";
import { AlertService } from "src/app/core/services/alert.service";
import { PrivateApiService } from "src/app/features/backoffice/services/private-api.service";
import { BaseApiService } from "src/app/shared/services/base-api.service";
import { GoogleAuthProvider } from "firebase/auth";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private token: string = "";
	private loggedIn = false;
	private logginGoogle=false;
	
	constructor(
		private baseApi: BaseApiService,
		private privateApi: PrivateApiService,
		private router: Router,
		private alert: AlertService,
		private afAuth: AngularFireAuth
	) {}

	async loginGoogle() {
		const provider = new GoogleAuthProvider();
		this.logginGoogle=true;
		return this.afAuth.signInWithPopup(provider);
	}

	logoutGoogle() {
		this.afAuth.signOut();
	}

	login(user: User | Partial<User>) {
		return this.baseApi.post("/login", user).pipe(
			map((res: any) => {
				if (res.token == undefined) {
					return throwError("Usuario o contraseña incorrectos");
				}
				this.loggedIn = true;
				this.token = res.token;

				return res;
			})
		);
	}

	register(user: User | Partial<User>) {
		return this.baseApi.post("/register", user).pipe(
			map((res: any) => {
				if (!res.success) {
					return throwError("Error al registrarse");
				}
				return res;
			})
		);
	}

	verifyAuth() {
		return this.privateApi.get("/auth/me").pipe(
			map((res: any) => {
				return res.success;
			})
		);
	}

	askLogout() {
		this.alert
			.alertQuestion(
				"¿Quiere cerrar sesion?",
				"Confirme para salir",
				"question"
			)
			.then((res) => {
				if (res.isConfirmed) {
					of(true);
				}
			});
		return of(false);
	}

	logout() {
		this.afAuth.onAuthStateChanged(function(user) {
			if (user) {
			  // User is signed in.
			}
		  });
		this.loggedIn = false;
		localStorage.removeItem("token");
		return of(true);
	}

	invalidAccess() {
		this.alert.alertNotification(
			"Acceso restringido",
			"No tiene permiso para acceder a esta area. ¡Debes ser un usuario válido!",
			"error"
		);
		this.router.navigate(["/auth/login"]);
	}
}