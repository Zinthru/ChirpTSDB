import * as React from 'react';
import { IChirp } from '../utils/Interface';
import { Link } from 'react-router-dom';

const ChirpCard: React.FC<IChirpCardProps> = props => {
    return(
        <div className="col-md-6 offset-md-3">
            <article className="card my-2 shadow-sm border border-primary">
                <div className="card-body text-center">
                    <h4 className="card-title text-info">{props.chirp.author} chirped:</h4>
                    <p className="card-text text-info">{props.chirp.text}</p>
                    <Link to={`/editing/${props.chirp.id}`} className="btn btn-outline-primary btn-sm">Edit Chirp!</Link>
                </div>
                <div className="card-footer text-center bg-secondary">
                    <p>Time posted: 99:99:99</p>
                </div>
            </article>
        </div>
    );
}

interface IChirpCardProps {
    chirp: IChirp
}

export default ChirpCard;